import {baseUrl} from './env'
import axios from 'axios';
import qs from 'qs'
import CryptoJS from 'crypto-js'

function genSignature (method, url, params) {
    let access_id = localStorage.getItem('Common:access_id') || '';
    let key = localStorage.getItem('Common:access_key')|| '';
    let entity_length = '0';

    //客户端时间的处理
    let client_time_stamp = parseInt(localStorage.getItem('Common:client_time'));
    if (!client_time_stamp) {
        client_time_stamp = parseInt(Date.parse(new Date().toGMTString()) / 1000); //客户端时间戳
        localStorage.setItem('Common:client_time', client_time_stamp);
    }

    //服务端时间的处理
    var server_time_stamp = parseInt(localStorage.getItem('Common:server_time'));
    if (!server_time_stamp) {
        axios.get(baseUrl+'/server')
            .then(function(response) {
                localStorage.setItem('Common:server_time', response.data.data.timestamp);
            })
    }

    //时间差的处理
    var diff_timestamp = server_time_stamp*1 - client_time_stamp*1; //客户端时间与服务器时间差
    var client_correct_time_stamp = Date.parse(new Date())*1 / 1000 + diff_timestamp*1; //当下正确时间戳
    var client_time = new Date(client_correct_time_stamp * 1000).toGMTString(); //当下正确时间

    if (method == 'POST' || method == 'PUT') {
        entity_length = getByteLen(params);
    }

    //加密URL的处理
    if (url.indexOf('?') != -1) {
        var end_length = url.indexOf("?");
        url = url.substr(0, end_length);
    }
    url = url.substr(1, url.length);
    var str = method + '\\n' + url + '\\n' + entity_length + '\\n' + client_time;
    var hash = CryptoJS.HmacSHA1(str, key);
    var sha = hash.toString(CryptoJS.enc.Base64);
    var auth = 'Jekun ' + access_id + ':' + sha;
    var signature_arr = new Array(auth, client_time, entity_length.toString());

    function getByteLen(val){
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            if (val[i].match(/[^\x00-\xff]/ig) != null) //全角
                len += 3;
            else
                len += 1;
        }
        return len;
    }
    return signature_arr;
}

axios.defaults.timeout = 10000;

//POST传参序列化
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log("错误的传参");
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use(res => {
    if (!res.data.success) {
        const code = res.data.data.code;
        if (code === 401) {
            Toast({
                message: res.data.data.message,
                iconClass: 'iconfont icon-guanbi',
            });
        }
    }
    return res;
}, (error) => {
    console.log("网络异常");
    return Promise.reject(error);
});

export default async(method, url, params = {}, is_auth = false) => {
    return new Promise((resolve, reject) => {
        let config = {};
        if(is_auth){
            let signature_arr = genSignature(method, url, params);
            config.headers = {
                'Authorization': signature_arr[0],
                'Entity-Date': signature_arr[1],
                'Entity-Length': signature_arr[2],
            }
        }

        url = baseUrl + url;
        let results = {};
        switch (method) {
            case 'GET':
                results = axios.get(url, config);
                break;

            case 'POST':
                results = axios.post(url, params, config);
                break;

            case 'PUT':
                results = axios.put(url, params, config);
                break;

            case 'DELETE':
                results = axios.delete(url, config);
                break;
        }

        resolve(results);
    })
}
