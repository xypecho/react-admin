/*
 * @Author: xueyp
 * @Date: 2019-09-23 21:39:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-10 21:33:32
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';

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
