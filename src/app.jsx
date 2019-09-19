import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

ReactDom.render(
    <div>
        {new Date().toUTCString()}
    </div>,
    document.getElementById("app")
)
