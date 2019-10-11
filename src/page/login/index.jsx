/*
 * @Author: xueyp
 * @Date: 2019-10-10 21:20:53
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 23:07:13
 * @description: 登录页面
 */
import React from 'react';
import User from 'service/user-service.jsx';
import Mutil from 'util/mm.jsx';
import './index.scss';

const _user = new User();
const _mm = new Mutil();

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title = '登录';
    }
    inputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    keyUpChange(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }
    onSubmit() {
        _user.login({ username: this.state.username, password: this.state.password }).then(res => {
            // console.log(res)
            console.log(this.state.redirect)
            // this.props.history.push(this.state.redirect)
        }, err => {
            _mm.errorTips(err);
        })
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录react-admin</div>
                    <div className="panel-body">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-3 control-label">用户名</label>
                                <div className="col-sm-9">
                                    <input type="text" name='username' className="form-control" placeholder="请输入用户名" onChange={e => this.inputChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">密码</label>
                                <div className="col-sm-9">
                                    <input type="password" name='password' className="form-control" placeholder="请输入密码" onChange={e => this.inputChange(e)} onKeyUp={e => this.keyUpChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button onClick={e => this.onSubmit(e)} className="btn btn-primary btn-block">登录</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
