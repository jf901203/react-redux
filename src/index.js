import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/store'

function render() { 
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
 }
// 初始化渲染DOM
 render()

// 当state发生改变时 自动调用 状态更新 重绘DOM
store.subscribe(()=>{
  render()
})

serviceWorker.unregister();
