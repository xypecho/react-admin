/*
 * @Author: xueyp
 * @Date: 2019-09-24 22:39:58
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-24 22:48:06
 * @description: 布局组件
 */
import React from 'react';
import './theme.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                这是首页
                {/* this.props.children是用来渲染中间区域的内容的，类似于vue中的router-view */}
                {this.props.children}
            </div>
        )
    }
}