// 包含n个action的模块

import {INCREMENT,DECREMENT} from './action-types'
// 增加的行为
export const increment=(number)=>({type:INCREMENT,data:number})
// 减少的行为
export const decrement=(number)=>({type:DECREMENT,data:number})