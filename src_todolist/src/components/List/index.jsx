import React, { Component } from 'react'
import Item from '../Item'
import "./index.css"
export default class List extends Component {
  render() {
    const {things,changeCheckedStatus,delThing}=this.props
    return (
      <ul className="todo-main">
         {
           things.map(
             (item)=>{return <Item key={item.id} {...item} changeCheckedStatus={changeCheckedStatus} delThing={delThing}/>}
           )
         }
         
        </ul>
    )
  }
}
