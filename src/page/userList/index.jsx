/*
 * @Author: xueyp
 * @Date: 2019-10-15 20:24:53
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-15 21:30:09
 * @description: 用户管理页面
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'component/layout/component/pageTitle/index.jsx'
import Pagination from 'component/pagination/index.jsx';

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <PageTitle title='用户管理' />
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline" role="grid"><table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" aria-describedby="dataTables-example_info">
                                        <thead>
                                            <tr role="row"><th className="sorting_asc"  aria-controls="dataTables-example" aria-label="Rendering engine: activate to sort column ascending" aria-sort="ascending" >Rendering engine</th><th className="sorting"  aria-controls="dataTables-example" aria-label="Browser: activate to sort column ascending" >Browser</th><th className="sorting"  aria-controls="dataTables-example" aria-label="Platform(s): activate to sort column ascending" >Platform(s)</th><th className="sorting"  aria-controls="dataTables-example" aria-label="Engine version: activate to sort column ascending">Engine version</th><th className="sorting"  aria-controls="dataTables-example" aria-label="CSS grade: activate to sort column ascending" >CSS grade</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr className="gradeA odd">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Firefox 1.0</td>
                                                <td className=" ">Win 98+ / OSX.2+</td>
                                                <td className="center ">1.7</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA even">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Firefox 1.5</td>
                                                <td className=" ">Win 98+ / OSX.2+</td>
                                                <td className="center ">1.8</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA odd">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Firefox 2.0</td>
                                                <td className=" ">Win 98+ / OSX.2+</td>
                                                <td className="center ">1.8</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA even">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Firefox 3.0</td>
                                                <td className=" ">Win 2k+ / OSX.3+</td>
                                                <td className="center ">1.9</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA odd">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Camino 1.0</td>
                                                <td className=" ">OSX.2+</td>
                                                <td className="center ">1.8</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA even">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Camino 1.5</td>
                                                <td className=" ">OSX.3+</td>
                                                <td className="center ">1.8</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA odd">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Netscape 7.2</td>
                                                <td className=" ">Win 95+ / Mac OS 8.6-9.2</td>
                                                <td className="center ">1.7</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA even">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Netscape Browser 8</td>
                                                <td className=" ">Win 98SE+</td>
                                                <td className="center ">1.7</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA odd">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Netscape Navigator 9</td>
                                                <td className=" ">Win 98+ / OSX.2+</td>
                                                <td className="center ">1.8</td>
                                                <td className="center ">A</td>
                                            </tr><tr className="gradeA even">
                                                <td className="sorting_1">Gecko</td>
                                                <td className=" ">Mozilla 1.0</td>
                                                <td className=" ">Win 95+ / OSX.1+</td>
                                                <td className="center ">1</td>
                                                <td className="center ">A</td>
                                            </tr></tbody>
                                    </table>
                                        <Pagination current={1} total={22} onChange={(current, pageSize) => { console.log(current, pageSize) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}