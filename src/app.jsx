/*
 * @Author: xueyp
 * @Date: 2019-09-23 21:39:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-24 22:43:22
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById("app")
)
