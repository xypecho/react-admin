/*
 * @Author: xueyp
 * @Date: 2019-09-23 21:39:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-15 20:26:56
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import UserList from 'page/UserList/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={props => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/product" component={Home} />
                                <Route path="/product-category" component={Home} />
                                <Route path='/user/index' component={UserList}/>
                                <Redirect exact from='/user' to='/user/index' />
                                {/* 上面这段代码的意思是路由访问 '/user' 时会重定向到 '/user/index' */}
                                <Route component={ErrorPage} />
                            </Switch>
                        </Layout>
                    )} />
                </Switch>
            </Router>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById("app")
)
