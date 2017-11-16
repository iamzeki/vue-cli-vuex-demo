import account from '@/page/account'
import login from '@/page/account/login'
import loginOut from '@/page/account/login-out'

export default [
    {
        path: '/account',
        component: account,
        children: [
            {path: 'login', component: login},
            {path: 'login-out', component: loginOut},
        ]
    }
]