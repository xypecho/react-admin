/*
 * @Author: xueyp
 * @Date: 2019-10-10 23:03:21
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:16:08
 * @description: 统计接口
 */
import Mutil from 'util/mm.jsx';
const _mm = new Mutil();

export default class Statistic {
    getHomeStatistic() {
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}