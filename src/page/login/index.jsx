/*
 * @Author: xueyp
 * @Date: 2019-10-10 21:20:53
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 22:05:23
 * @description: 登录页面
 */
import React from 'react';
import './index.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    inputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录react-admin</div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-3 control-label">用户名</label>
                                <div className="col-sm-9">
                                    <input type="text" name='username' className="form-control" placeholder="请输入用户名" onChange={e => this.inputChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">密码</label>
                                <div className="col-sm-9">
                                    <input type="password" name='password' className="form-control" placeholder="请输入密码" onChange={e => this.inputChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button type="submit" className="btn btn-primary btn-block">登录</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
