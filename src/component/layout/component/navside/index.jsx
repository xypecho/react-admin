/*
 * @Author: xueyp
 * @Date: 2019-09-25 21:25:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:26:24
 * @description: 侧边导航栏
 */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navName: ''
        }
    }
    toggleShow(name) {
        if (name === this.state.navName) {
            this.setState({
                navName: ''
            })
        } else {
            this.setState({
                navName: name
            })
        }
    }
    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <NavLink activeClassName='active-menu' exact to="/"><i className="fa fa-fw fa-file"></i> 首页</NavLink>
                        </li>
                        <li>
                            <Link to="/product" onClick={() => { this.toggleShow('product') }}><i className="fa fa-sitemap"></i> 商品<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.navName === 'product' ? "" : "collapse"}`}>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/product">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/product-category">品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/order" onClick={() => { this.toggleShow('order') }}><i className="fa fa-sitemap"></i> 订单<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.navName === 'order' ? "" : "collapse"}`}>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/order">订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user" onClick={() => { this.toggleShow('user') }}><i className="fa fa-sitemap"></i> 用户<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.navName === 'user' ? "" : "collapse"}`}>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/user">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}