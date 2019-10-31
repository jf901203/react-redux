
## redux理解

1. 中文文档 https://www.redux.org.cn/

## Redux是什么

1. redux是一个独立专门用于做状态管理的js库(不是React插件库)
2. 它可以用在react angular vue等项目中，但基本与rect配合使用
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