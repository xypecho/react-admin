/*
 * @Author: xueyp
 * @Date: 2019-10-10 23:03:21
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-15 21:36:07
 * @description: 关于用户的接口
 */
import Mutil from 'util/mm.jsx';
const _mm = new Mutil();

export default class User {
    // 登录
    login(userInfo) {
        return _mm.request({
            url: '/manage/user/login.do',
            type: 'post',
            data: userInfo
        })
    }
    // 退出登录
    logout() {
        return _mm.request({
            url: '/user/logout.do',
            type: 'post',
        })
    }
    // 获取用户列表
    getUserList(pageNum) {
        return _mm.request({
            url: '/manage/user/list.do',
            type: 'post',
            data: {
                pageNum
            }
        })
    }
}