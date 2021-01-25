import React, { Component } from 'react'
import {Link,Route}  from 'react-router-dom'
import Info from './info'
export default class News extends Component {
  state={
    newsdata:[
      {id:1,title:'郑爽张恒那点事'},
      {id:2,title:'特朗普即将下台'},
      {id:3,title:'普拉达股价上涨'},
      {id:4,title:'春节返乡人员须持有7日内核酸阴性检测证明才能返乡'},
    ]
  }
  render() {
    return (
      <div>
         <ul>
                {
                  this.state.newsdata.map((item)=>{
                // return  <li key={item.id}><Link to={`/home/news/info/${item.id}/${item.title}`} children={item.title} /></li>
             return   <li key={item.id}><Link to={`/home/news/info/?id=${item.id}&title=${item.title}`} children={item.title} /></li>
                  })
                }
                </ul>
                <hr/>
             {/* <Route path='/home/news/info/:id/:title' component={Info}/> */}
             <Route path='/home/news/info' component={Info}/>
      </div>
    )
  }
}
