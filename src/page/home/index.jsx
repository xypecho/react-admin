/*
 * @Author: xueyp
 * @Date: 2019-09-24 21:39:00
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:18:34
 * @description: 首页
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'component/layout/component/pageTitle/index.jsx'
import './index.scss';

import Statistic from 'service/statistic-service.jsx';
import Mutil from 'util/mm.jsx';
const _statistic = new Statistic();
const _mm = new Mutil();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: '',
            productCount: '',
            orderCount: ''
        }
    }
    componentDidMount() {
        this.loadCount();
    }
    loadCount() {
        _statistic.getHomeStatistic().then(res => {
            this.setState(res)
        }, err => {
            _mm.errorTips(err);
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <PageTitle title='首页' />
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Library</a></li>
                            <li className="active">Data</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <Link to="/user">
                            <div className="panel panel-primary text-center no-boder bg-color-green green">
                                <div className="panel-left pull-left green">
                                    <i className="fa fa-users fa-5x"></i>
                                </div>
                                <div className="panel-right pull-right">
                                    <h3>{this.state.userCount}</h3>
                                    <strong>用户数量</strong>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <Link to="/product">
                            <div className="panel panel-primary text-center no-boder bg-color-blue blue">
                                <div className="panel-left pull-left blue">
                                    <i className="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div className="panel-right pull-right">
                                    <h3>{this.state.productCount}</h3>
                                    <strong>商品数量</strong>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <Link to="/order">
                            <div className="panel panel-primary text-center no-boder bg-color-red red">
                                <div className="panel-left pull-left red">
                                    <i className="fa fa fa-comments fa-5x"></i>
                                </div>
                                <div className="panel-right pull-right">
                                    <h3>{this.state.orderCount}</h3>
                                    <strong>订单数量</strong>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;