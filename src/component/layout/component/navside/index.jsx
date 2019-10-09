/*
 * @Author: xueyp
 * @Date: 2019-09-25 21:25:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-25 22:08:45
 * @description: 侧边导航栏
 */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapse: true
        }
    }
    toggleShow() {
        this.setState({
            isCollapse: !this.state.isCollapse
        })
        console.log(this.state.isCollapse)
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
                            <Link to="/product" onClick={() => { this.toggleShow() }}><i className="fa fa-sitemap"></i> 商品<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.isCollapse === true ? "collapse" : ""}`}>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/product">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/product-category">品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/order" onClick={() => { this.toggleShow() }}><i className="fa fa-sitemap"></i> 订单<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.isCollapse === true ? "collapse" : ""}`}>
                                <li>
                                    <NavLink activeClassName='active-menu' to="/order">订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user" onClick={() => { this.toggleShow() }}><i className="fa fa-sitemap"></i> 用户<span className="fa arrow"></span></Link>
                            <ul className={`nav nav-second-level ${this.state.isCollapse === true ? "collapse" : ""}`}>
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