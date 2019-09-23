/*
 * @Author: xueyp
 * @Date: 2019-09-23 21:39:05
 * @Last Modified by: xueyp
 * @Last Modified time: 2019-09-23 21:45:47
 */
import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import './test.scss';

ReactDom.render(
    <div>
        {new Date().toUTCString()}
    </div>,
    document.getElementById("app")
)
