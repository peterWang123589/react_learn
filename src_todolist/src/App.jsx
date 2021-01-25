import React, { Component } from 'react'
import Header from './components/Header'
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
export default class App extends Component {
  state={things:[
    {id:'001',name:'敲代码',done:true},
    {id:'002',name:'烫头发',done:false},
    {id:'003',name:'吹牛逼',done:false},
    {id:'004',name:'吃饭饭',done:true},
  ]}
  addThing=(thingobj)=>{
       let arr =this.state.things
       let newarr=[thingobj,...arr]
       this.setState({things:newarr})
  }
  delThing=(id)=>{
    let arr =this.state.things
    let newarr=arr.filter(
      (item)=>{return item.id!==id}
    )
    this.setState({things:newarr})
  }

  changeCheckedStatus=(id,checkedStatus)=>{
    let arr =this.state.things
  const newarr=  arr.map((item)=>{
      if(item.id===id){return {...item,done:checkedStatus}}
      else{return {...item}}
    })
    this.setState({things:newarr})
  }
  checkAllthings=(all_check_status)=>{
    const {things}=this.state
    let  newthings=things.map(item=>{return {...item,done:all_check_status}})
    this.setState({things:newthings})
  }
clearAllDone=()=>{
  const {things}=this.state
  let newthings=things.filter(
    (item)=>{return !item.done}
  )
  this.setState({things:newthings})
}
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addThing={this.addThing}/>
        <List things={this.state.things} changeCheckedStatus={this.changeCheckedStatus} delThing={this.delThing}/>
        <Footer things={this.state.things} checkAllthings={this.checkAllthings} clearAllDone={this.clearAllDone}/>
      </div>
    </div>
    )
  }
}
