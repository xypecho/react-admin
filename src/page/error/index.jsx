/*
 * @Author: xueyp
 * @Date: 2019-10-14 21:36:10
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:47:59
 * @description: 404页面
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'component/layout/component/pageTitle/index.jsx'

export default class Error extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <PageTitle title='404 not found' />
                    <footer><p>找不到该页面，<Link to="/">点我返回首页</Link></p></footer>
                </div>
            </div>
        )
    }
}