import React, { Component } from 'react'
import qs from 'querystring'
export default class Info extends Component {
  
  render() {
    const infodata=[
      {id:1,content:'xxx'},
      {id:2,content:'xxxxxx'},
      {id:3,content:'xxxxxxxxx'},
      {id:4,content:'xxxxxxxxxxxx'},
    ]
      
  // console.log(this.props)
  // const {id,title}=this.props.match.params
  // console.log(this.props.location.search)
  const result_str=this.props.location.search
  const {id,title}=qs.parse(result_str.slice(1))
  // console.log(infodata)
  const res=infodata.find((item) => {return item.id == id})
    // console.log(res)
    return (
      <div>
         <ul>
           <li>id:{id}</li>
           <li>title:{title}</li>
           <li>content:{res.content}</li>
         
         </ul>
      </div>
    )
  }
}
