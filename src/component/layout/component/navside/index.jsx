/*
 * @Author: xueyp
 * @Date: 2019-09-25 21:25:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-25 22:08:45
 * @description: 侧边导航栏
 */
import React from 'react';

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
                            <a href="empty.html"><i className="fa fa-fw fa-file"></i> 首页</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => { this.toggleShow() }}><i className="fa fa-sitemap"></i> 商品<span className="fa arrow"></span></a>
                            <ul className={`nav nav-second-level ${this.state.isCollapse === true ? "collapse" : ""}`}>
                                <li>
                                    <a href="#">商品管理</a>
                                </li>
                                <li>
                                    <a href="#">品类管理</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}