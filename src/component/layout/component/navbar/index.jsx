/*
 * @Author: xueyp
 * @Date: 2019-09-25 21:25:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 20:04:57
 * @description: 头部导航栏
 */
import React from 'react';
import User from 'service/user-service.jsx';
import Mutil from 'util/mm.jsx';

const _user = new User();
const _mm = new Mutil();

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: JSON.parse(localStorage.getItem('userInfo')).username || ''
        }
    }
    logout() {
        _user.logout().then(() => {
            localStorage.clear();
            window.location.href = '/login';
        }, err => {
            _mm.errorTips(err)
        })
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" to="/"><b>REACT</b>ADMIN</a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username ? <span style={{ color: '#000000' }}>{this.state.username}</span> : <span style={{ color: '#000000' }}>欢迎您，游客</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li onClick={() => { this.logout() }}>
                                <a href="#"><i className="fa fa-sign-out fa-fw"></i> 退出登录</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}