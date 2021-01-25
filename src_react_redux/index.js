import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import  store from './redux/store'
//使用react-redux后，不用再担心检测组件渲染的问题，recat-redux的connect的方法在底层帮我们实现了
ReactDOM.render(<App/>,document.getElementById('root'))
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })