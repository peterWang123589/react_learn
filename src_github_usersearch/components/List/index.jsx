import React, { Component } from 'react'
import "./index.css"
export default class List extends Component {
  render() {
                  const  {users,isFirstOpen,isLoading,error}=this.props
    return (
      <div className="row">
      {
          isFirstOpen?<h2>欢迎你来到GitHub用户搜索小模块</h2>:(
             isLoading?<h2>Loading......</h2>:(
               error?<h2 style={{color:'red'}}>{error}</h2>:
               (users.map((item)=>{
                return <div key={item.id} className="card">
                <a rel="noreferrer" href={item.html_url} target="_blank">
                  <img alt='avatar' src={item.avatar_url} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{item.login}</p>
              </div>
              }))
             )
          )
      }
   </div>
    )
  }
}
