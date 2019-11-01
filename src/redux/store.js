import {createStore} from 'redux'

// reducers改变状态的模块
import {counter} from './reducers'
// 创建一个store对象
// 内部会第一次调用reducer函数得到初始state状态
const store=createStore(counter)
export default store