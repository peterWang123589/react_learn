import React, { Component } from 'react'
import  {Route,Switch,Redirect}  from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
          {/* activeClassName='navActive' className="list-group-item"会重复出现以及 为了NavLinkd组件的复用，自己封装
          MyNavLink组件 */}
          {/* <NavLink activeClassName='navActive' className="list-group-item" to='/home' >Home</NavLink>
          <NavLink activeClassName='navActive'  className="list-group-item" to='/about' >About</NavLink> */}
          <MyNavLink to='/home'  children='Home'/>
          <MyNavLink to='/about'  children='About'/>
          <MyNavLink to='/vip'  children='Vip'/>
          <MyNavLink to='/person'  children='Person'/>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Redirect to='/home' />
            </Switch>
           
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
