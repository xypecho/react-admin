/*
 * @Author: xueyp
 * @Date: 2019-10-21 22:02:28
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-21 22:10:22
 * @description: 商品管理的路由
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import ProductList from 'page/product/index/index.jsx';
import ProductCategory from 'page/product/category/index.jsx';

export default class ProductRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/product/index' component={ProductList} />
                <Redirect exact from="/product" to='/product/index' />
            </Switch>
        )
    }
}
