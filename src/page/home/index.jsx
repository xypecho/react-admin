/*
 * @Author: xueyp
 * @Date: 2019-09-24 21:39:00
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-09 23:27:51
 * @description: 首页
 */
import React from 'react';
import PageTitle from 'component/layout/component/pageTitle/index.jsx'
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <PageTitle title='首页'/>
                    <ol className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Library</a></li>
                        <li className="active">Data</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Home;