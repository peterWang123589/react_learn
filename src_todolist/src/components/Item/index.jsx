import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {
  state={flag:false}

  ComeIn=(flag)=>{
    return ()=>{
   this.setState({flag:flag})
    }
  }

  updateChecked=(id)=>{
    return ({target})=>{
      // console.log(`${id}现在的checked状态应该是${target.checked}`)
      this.props.changeCheckedStatus(id,target.checked)
    }
  }
  sendDelobj=(id)=>{
    if(window.confirm('你确定要删除吗？')){
      this.props.delThing(id)
    }
    
  }
  render() {
    const {id,name,done}=this.props
    const {flag}=this.state
    return (
      <li style={{backgroundColor:flag?"#ddd":"#fff"}} onMouseEnter={this.ComeIn(true)} onMouseLeave={this.ComeIn(false)}>
            <label>
              <input type="checkbox" checked={done} onChange={this.updateChecked(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:flag?'block':'none'}} onClick={()=>{this.sendDelobj(id)}}>删除</button>
          </li>
    )
  }
}
