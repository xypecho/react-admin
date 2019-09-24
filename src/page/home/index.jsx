/*
 * @Author: xueyp
 * @Date: 2019-09-24 21:39:00
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-24 22:25:20
 * @description: 首页
 */
import React from 'react';
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-default" type="submit">Button</button>
                <button type="button" className="btn btn-primary">（首选项）Primary</button>
            </div>
        )
    }
}

export default Home;