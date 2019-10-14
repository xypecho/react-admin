/*
 * @Author: xueyp
 * @Date: 2019-09-24 22:39:58
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:43:06
 * @description: 布局组件
 */
import React from 'react';
import Navbar from './component/navbar/index.jsx';
import Navside from './component/navside/index.jsx';
import './theme.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='wrapper'>
                <Navbar />
                <Navside />
                <div id='page-wrapper'>
                    <div id='page-inner'>
                        {/* this.props.children是用来渲染中间区域的内容的，类似于vue-router中的router-view */}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}