import React, { Component } from 'react'
import "./index.css"
import {nanoid} from "nanoid"
export default class Header extends Component {
  sendThingobj=({target,keyCode})=>{
   const {addThing}  =  this.props
   let thing_name=target.value
   if(keyCode !== 13) return
   if(thing_name.trim()===""){alert('请不要添加空事件'); return}
  //  console.log(thing_name,keyCode)
  let thingobj={id:nanoid(),name:thing_name,done:false}
  addThing(thingobj)
  target.value=''
  
  }
  render() {
    return (
      <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.sendThingobj}/>
        </div>
    )
  }
}
