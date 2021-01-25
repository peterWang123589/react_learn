import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
  checkedAll=(checkedAllStatus)=>{
   this.props.checkAllthings(checkedAllStatus)
  }
  clearAllthings=()=>{
    this.props.clearAllDone()
  }
  render() {
          const {things}=this.props
          let total=things.length
          let done_total=things.reduce(
           (prev,currentItem)=>{
             return currentItem.done?prev+1:prev
           },0
          )
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={done_total===total && done_total > 0?true:false} onChange={({target})=>{this.checkedAll(target.checked)}}/>
        </label>
        <span>
          <span>已完成{done_total}</span> / 全部{total}
        </span>
        <button  className="btn btn-danger" onClick={this.clearAllthings}>清除已完成任务</button>
      </div>
    )
  }
}
