<template>
    <div class="jk-car-air">
        <!--免费检测-->
        <div class="jk-main-box jk-to-check">
            <div class="jk-car-info">
                <template v-if="true">
                    <div class="car-logo">
                        <img alt="集群车宝">
                    </div>
                    <span class="car-num">粤A12345</span>
                    <a class="car-switch" href="">切换</a>
                </template>
                <template v-else>
                    <a class="choose-car" href="">
                        <i class="icon-car-sm"></i><span>请选择汽车</span>
                    </a>
                </template>
            </div>
            <div class="jk-check-banner"></div>
            <div class="jk-check-btn">
                <a class="jk-btn-block">马上检测</a>
            </div>
            <p>专业仪器检测 ISO9001认证</p>
        </div>
        <!--检测类型-->
        <div class="jk-main-box jk-check-type">
            <ul>
                <li>
                    <i class="icon icon-HCHO"></i>
                    <h3>除甲醛</h3>
                    <h4>
                        <template v-if="true">
                            <label class="col-1">1111</label>
                            1111
                        </template>
                        <template v-else>未检测</template>
                    </h4>
                </li>
                <li>
                    <i class="icon icon-TVOC"></i>
                    <h3>TVOC清除</h3>
                    <h4>
                        <template v-if="false">
                            <label :class="'col-' + data_TVOC.level">{{data_TVOC.level | toLeaveName}}</label>
                            {{data_TVOC.value | formatStr}}
                        </template>
                        <template v-else>未检测</template>
                    </h4>
                </li>
                <li>
                    <i class="icon icon-PM25"></i>
                    <h3>PM2.5净化</h3>
                </li>
            </ul>
        </div>
        <!--危害来源-->
        <div class="jk-main-box jk-sources">
            <h3>危害来源</h3>
            <ul>
                <li>
                    <div class="img"><img src="../../assets/images/carAir/img-HCHO.jpg"></div>
                    <div class="text">
                        <h4>甲醛</h4>
                        <p>车内释放来源于：如仪表盘、中控台等塑料件、座椅、 车顶毡、饰品、遮阳挡等物件；</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="../../assets/images/carAir/img-TVOC.jpg"></div>
                    <div class="text">
                        <h4>TVOC</h4>
                        <p>车内释放来源于：如座椅、脚垫、饰品、橡胶、涂料、 塑料件等；</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="../../assets/images/carAir/img-PM25.jpg"></div>
                    <div class="text">
                        <h4>PM2.5</h4>
                        <p>车内主要来源于：汽车产生的尾气排放、人为产生的煤 炭、石油及其他矿物燃烧产生的工业废气,以及机动车...</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    //import 'STYLE/car-air/index.scss'
    import 'STYLE/car-air.scss'
    export default {
        data (){
            return {}
        },
        components: {},
        methods: {},
        mounted (){
        }
    }
</script>

<style>
</style>
