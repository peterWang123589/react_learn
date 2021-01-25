import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  sendMessage=()=>{//首先访问的是代理服务器
    axios.get('http://localhost:3000/api1/students').then(
      (data)=>{console.log(data.data)}
    ).catch((error)=>{console.log(error)})
  }
  sendOtherMessage=()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      (data)=>{console.log(data.data)}
    ).catch((error)=>{console.log(error)})
  }
  render() {
    return (
      <div>
        <button onClick={this.sendMessage}>发送请求</button>
        <button onClick={this.sendOtherMessage}>发送另一个请求</button>
      </div>
    )
  }
}
