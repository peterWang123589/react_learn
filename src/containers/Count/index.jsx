
import {connect}  from 'react-redux'

import React, { Component } from 'react'
// import store  from '../../redux/store'
//把UI组件和容器组件整合起来，默认导出容器组件，UI组件不暴露，直接给connet用
class Count extends Component {
  add=()=>{
    const {value}=this.textdom
    // store.dispatch({type:'add',data:value * 1})
    this.props._add(value * 1)
  }
  sub=()=>{
    const {value}=this.textdom
    // store.dispatch({type:'sub',data:value * 1})
    this.props._sub(value * 1)
  }
  odd_add=()=>{
    const {value}=this.textdom
    const count=this.props.count
    if(count % 2 !==0){
      // store.dispatch({type:'add',data:value * 1})
      this.props._add(value * 1)
    }
  }
  async_add=()=>{
    const {value}=this.textdom
    setTimeout(()=>{
      // store.dispatch({type:'add',data:value * 1})
      this.props._add(value * 1)
    },1000)
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>我是Count组件,下方组件的总人数为{this.props.person.length}</h1>
        <h2>当前的数字为：{this.props.count}</h2>
         <select name="" id="" ref={(dom)=>{this.textdom=dom}}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>&nbsp;
         <button type='button' className='btn btn-primary' onClick={this.add}>点击加</button>&nbsp;
         <button type='button' className='btn btn-primary' onClick={this.sub}>点击减</button>&nbsp;
         <button type='button' className='btn btn-primary' onClick={this.odd_add}>只有奇数时才能加</button>&nbsp;
         <button type='button' className='btn btn-primary' onClick={this.async_add}>异步加</button>
      </div>
    )
  }
}




export default   connect(
state=>({count:state.count_total,person:state.person_members}),
{
  _add:(data)=>({type:'add',data}),
  _sub:(data)=>({type:'sub',data})
}


)(Count)