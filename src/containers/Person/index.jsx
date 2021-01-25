import React, { Component } from 'react'
import {connect}  from 'react-redux'
import {nanoid}  from 'nanoid'
 class Person extends Component {
   addPerson=()=>{
     const name=this.namedom.value
     const age=this.agedom.value
     this.props.add_member({id:nanoid(),name,age:age * 1})
     this.namedom.value=''
     this.agedom.value=''
    
   }
  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>我是Person组件,上方组件的总数为{this.props.count}</h2>
        <label htmlFor="name" >姓名</label>
        <input type="text" className='form-control' id='name' ref={dom=>this.namedom=dom}/>
        <label htmlFor="age">年龄</label>
        <input type="text" className='form-control' id='age' ref={dom=>this.agedom=dom}  />
        <button className='btn btn-warning' onClick={this.addPerson}>添加新用户</button>
        <ul>
          {
             this.props.person.map(
               (item)=>{
                 return <li key={item.id}>用户{item.name},年龄为{item.age}</li>
               }
             )
          }
        </ul>
      </div>
    )
  }
}
export default connect(
state=>({person:state.person_members,count:state.count_total}),
{
  add_member:(data)=>({type:'add_person',data})
}

)(Person)
