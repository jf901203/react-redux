
## redux理解

1. 中文文档 https://www.redux.org.cn/

## Redux是什么

1. redux是一个独立专门用于做状态管理的js库(不是React插件库)
2. 它可以用在react angular vue等项目中，但基本与react配合使用
3. 作用：集中式管理react应用中多个组件共享的状态 对数据进行集中式管理
4. 状态在哪里 修改状态的行为就在哪里
5. 状态就不在组件中了 放在redux库里面管理了 redux提供了修改状态的行为
6. 组件可以读取状态 也可以调用行为去改变状态

## 初始化状态 
1. 组件与redux进行交互
2. store 核心对象
3. store===>React Component 


## 更新状态 声明式编程

1. actions===>store===>reducers
2. 分发事件 store.dispatch()
3. 更新状态 reducers(oldState,actions) =>newState 


## 在React中状态不能直接更新

1. this.state.xxx=newVal 这样是行不通的
2. this.setState({}) 必须重新设置新的状态对象

## store.dispatch

1. store.dispatch(demo) 分发函数名 函数名是函数对象的标识符 通过函数名去找到函数对象 并执行函数体
2. reducers(oldState,actions) =>newState 


## 发布与订阅

1. Pubsub.publish('demo',data)   分发函数名
2. Pubsub.subscribe('demo',(msg,data)=>{}) 找到函数名 并且调用函数体


## 什么情况下需要使用redux

1. 总体原则：能不用就不用，如果不用比较吃力才考虑使用
2. 某个组件的状态，需要共享
3. 某个状态需要在任何地方都可以拿到
4. 一个组件需要改变全局状态
5. 一个组件需要改变另一个组件的状态


## redux的核心API

1. createStore() 创建store对象的一个函数
  
  - 创建包含指定reducer的store对象
  
2. 编码
 
  - import {craeteStore} from 'redux'
  - import counter from './reducers/counter'
  - const store=createStore(counter)

##store 状态对象

1. 作用：
 
   - redux库最核心的管理对象

2. 它内部维护着：
 
   - state
   - reducer ===>根据一个老的状态产生一个新的状态

3. 核心方法
   
   - getState()
   - dispatch(action)    触发
   - subscribe(listener) 回调调用
   
4. 编码

   - store.getState() 读取状态
   - store.dispatch({type:'INCREMENT',number}) 触发事件
   - store.subscribe(render) 事件回调


## applyMiddleware()

1. 作用:
  
   - 应用上基于redux的中间件(插件库)

2. 编码：
 
   - import {createStore,applyMiddleWare} from 'redux'
   - import thunk from 'redux-thunk' redux异步中间件
   - cont store=createStore(counter,applyMiddleware) 应用上异步中间件

## combineReducers()
 
1. 作用

   - 作用：合并多个reducer函数
   
2. 编码

   - export default combineReducers({})

    


## 下载依赖包 

1. npm install --save redux


## redux 的三个核心概念

## action对象

1. 标识要执行行为的对象
2. 包含2个方面的属性
   
  - type 标识属性 值为字符串 唯一，必要性
  - xxx:数据属性 值类型任意 可选属性

3. 例子

   - const actions={type:'INCREMENT',Data:2}

4. Action create(创建action的工厂函数)
 
   - const increment=(number)=>({type:'INCREMENT',Data:number})
  

## reducer

1. 根据老的state和action 产生新的state的纯函数
2. 样例

	export function counter(sate=0,action){
	
		switch(action.type){
		
		 case 'INCREMENT':
		
		  return state + action.data
		
		 case 'DESCREMENT':
		 
			return state-action.data
			
		 default:
			
			return state
		
		}
	
	}

3. 注意：返回一个新的状态 不要修改原来的状态


## store

1. 将state，action，reducer联系在一起的对象
2. 如何得到此对象呢？

  - import {createStore} from 'redux'
  - import reducer from './reducers'
  - const store = createStore(reducer)

3. 此对象提供的方法

  - getState() 得到state
  - dispatch(action) 分发一个action对象 对象包含事件名和数据的键值对
  - subscribe(listener):注册监听 当产生了新的state时，自动调用

## subscribe(listener) 监听在state状态发生改变的时候能够重绘组件


## reducers模块

1. 包含n个reducer函数的模块
2. 改变状态
3. reducer函数接受两个参数(state,action)

## actions模块

1. 包含所有的action的模块

## action-types常量模块

1. // 常量模块