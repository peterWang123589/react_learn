import React, { Component } from 'react'
import {Switch,Route,Redirect }  from 'react-router-dom'
import  MyNavLink from '../../components/MyNavLink'
import Message from "./Message"
import News from "./News"

export default class Home extends Component {
  render() {
    return (
      <div>
         <h3>我是Home的内容</h3>
         <ul className="nav nav-tabs">
                  <li>
                    {/* <a className="list-group-item active" href="./home-news.html">News</a> */}
                    <MyNavLink to='/home/message' children='Message'/>
                  </li>
                  <li>
                    {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
                    <MyNavLink to='/home/news' children='News'/>
                  </li>
                </ul>
               <Switch>
                 <Route path='/home/message' component={Message}/>
                 <Route path='/home/news' component={News}/>
                 <Redirect to='/home/message' />
                 </Switch> 
              
      </div>
      
    )
  }
}
