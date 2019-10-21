/*
 * @Author: xueyp
 * @Date: 2019-10-21 22:10:45
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-21 22:11:43
 * @description: 商品管理页面
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'component/layout/component/pageTitle/index.jsx'
import Pagination from 'component/pagination/index.jsx';
import User from 'service/user-service.jsx';
import Mutil from 'util/mm.jsx';
const _user = new User();
const _mm = new Mutil();

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNum: 1,
            list: []
        }
    }
    componentWillMount() {
        this.loadUserList();
    }
    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
            console.log(res)
            this.setState(res)
        }, err => {
            _mm.errorTips(err);
        })
    }
    onPageChange(pageNum) {
        this.setState({
            pageNum
        }, () => {
            this.loadUserList()
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <PageTitle title='商品管理' />
                    <div className="col-md-12">
                        {/* <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline">
                                        <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" >
                                            <thead>
                                                <tr>
                                                    <th className="sorting_asc">ID</th>
                                                    <th className="sorting_asc">用户名</th>
                                                    <th className="sorting_asc">邮箱</th>
                                                    <th className="sorting_asc">电话</th>
                                                    <th className="sorting_asc">注册时间</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.list.map((item, index) => {
                                                        return (
                                                            <tr className="gradeA odd" key={index}>
                                                                <td className="sorting_1">{item.id}</td>
                                                                <td className="sorting_1">{item.username}</td>
                                                                <td className="sorting_1">{item.email}</td>
                                                                <td className="sorting_1">{item.phone}</td>
                                                                <td className="sorting_1">{new Date(item.createTime).toLocaleString()}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(current, pageSize) => { this.onPageChange(current, pageSize) }} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}