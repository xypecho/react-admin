/*
 * @Author: xueyp
 * @Date: 2019-10-10 21:10:25
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 22:59:57
 * @description: 通用的一些工具
 */
export default class Mutil {
    request(params) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: params.type || 'get',
                url: params.url || '',
                dataType: params.dataType || 'json',
                data: params.data || '',
                success(res) {
                    if (res.status === 0) {
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
    focusLogin() {
        // 这样登录成功后重新跳转到未登录时访问的页面
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
    }
}