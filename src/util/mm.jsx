/*
 * @Author: xueyp
 * @Date: 2019-10-10 21:10:25
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 22:59:57
 * @description: 通用的一些工具
 */
export default class Mutil {
    // 封装的ajax请求
    request(params) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: params.type || 'get',
                url: params.url || '',
                dataType: params.dataType || 'json',
                data: params.data || '',
                success(res) {
                    if (res.status === 0) {
                        // && 这个写法相当于 if (resolve === 'function') { resolve(res.data, res.msg) }
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if (res.status === 10) {
                        // 未登录
                        this.focusLogin();
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err) {
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
    }

    // 重定向到首页
    focusLogin() {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
    }

    // 获取url中的参数
    getUrlParam(name) {
        return new URLSearchParams(location.search).get(name);
    }

    // 错误提示
    errorTips(msg) {
        alert(msg || '网络错误，请稍候重试')
    }
}