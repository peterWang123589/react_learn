import React, { Component } from 'react'
import axios from "axios"

export default class Search extends Component {
  Search=()=>{
        const {InputDom,InputDom:{value:val},props:{updateStates}}  =   this
        console.log(InputDom,val)
        updateStates({isFirstOpen:false,isLoading:true})
        axios.get(`http://localhost:3000/api1/search/users?q=${val}`).then(
          (respones)=>{
            // console.log(respones.data)
              
              updateStates({users:respones.data.items,isLoading:false})
          },
          (error)=>{ 
            updateStates({error:error.message,isLoading:false})
            console.log(error) 
          }
        )
  }
  render() {
    return (
      <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索 Github 用户</h3>
      <div>
        <input ref={(dom)=>{this.InputDom=dom}} type="text" placeholder="请输入关键词"/>&nbsp;<button onClick={this.Search}>搜索</button>
      </div>
    </section>
    )
  }
}
