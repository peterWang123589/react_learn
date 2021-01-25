import React, { Component } from 'react'
import store  from '../../redux/store'
export default class Count extends Component {
  add=()=>{
    const {value}=this.textdom
    store.dispatch({type:'add',data:value * 1})
  }
  sub=()=>{
    const {value}=this.textdom
    store.dispatch({type:'sub',data:value * 1})
  }
  odd_add=()=>{
    const {value}=this.textdom
    const count=store.getState()
    if(count % 2 !==0){
      store.dispatch({type:'add',data:value * 1})
    }
  }
  async_add=()=>{
    const {value}=this.textdom
    setTimeout(()=>{
      store.dispatch({type:'add',data:value * 1})
    },1000)
  }
  render() {
    
    return (
      <div>
        <h2>当前的数字为：{store.getState()}</h2>
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
