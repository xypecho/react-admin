/*
 * @Author: xueyp
 * @Date: 2019-10-10 23:03:21
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 23:07:15
 * @description: 关于用户的接口
 */
import Mutil from 'util/mm.jsx';
const _mm = new Mutil();

export default class User {
    login(userInfo) {
        return _mm.request({
            url: '/manage/user/login.do',
            type: 'post',
            data: userInfo
        })
    }
    logout(){
        return _mm.request({
            url: '/user/logout.do',
            type: 'post',
        })
    }
}