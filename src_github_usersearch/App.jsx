import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"

export default class App extends Component {
        state={users:[],isFirstOpen:true,isLoading:false,error:''}
  updateStates=(option)=>{
      this.setState(option)

  }
  render() {
    return (
      <div className="container">
      <Search updateStates={this.updateStates}/>
      <List {...this.state}/>
    </div>
    )
  }
}
