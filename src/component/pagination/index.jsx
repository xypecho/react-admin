/*
 * @Author: xueyp
 * @Date: 2019-10-15 21:25:23
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-15 21:32:54
 * @description: 基于rc-pagination二次封装的分页组件
 */
import React from 'react';
import CrPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <CrPagination {...this.props} showQuickJumper hideOnSinglePage />
                </div>
            </div>
        )
    }
}