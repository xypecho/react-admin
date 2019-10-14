/*
 * @Author: xueyp
 * @Date: 2019-10-09 23:24:38
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-10-14 21:48:28
 * @description: 标题组件
 */
import React from 'react';

export default class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <h1 className="page-header">
                {this.props.title}
                {this.props.children}
                {/* 此处的this.props.children相当于vue中的solt插槽，可以在外部引用时在里面写html */}
            </h1>
        )
    }
}