import React, { Component } from 'react'
// 结构成两个变量
import {increment,decrement} from './redux/actions'

export default class App extends Component {

  addHandle=()=>{
    const number=this.select.value*1
    this.props.store.dispatch(increment(number))
  }
  deHandle=()=>{
    const number=this.select.value*1
    this.props.store.dispatch(decrement(number))
  }
  oddHandle=()=>{
    const number=this.select.value*1
    // 读取状态
    const count=this.props.store.getState()
    if(count%2===0){
      // 更新状态
      this.props.store.dispatch(increment(number))
    }
  }
  asyHandle=()=>{
    const number=this.select.value*1
    setTimeout(()=>{
      this.props.store.dispatch(increment(number))
    },3000)
  }
  render() {
    const count=this.props.store.getState()
   
    return (
      <div>
        <h1>Hello App</h1>
        <p>click {count} timers</p>
        <select ref={select=>this.select=select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.addHandle}>+</button>
        &nbsp;
        <button onClick={this.deHandle}>-</button>
        &nbsp;
        <button onClick={this.oddHandle}>increment</button>
        &nbsp;
        <button onClick={this.asyHandle}>atync</button>
      </div>
    )
  }
}
