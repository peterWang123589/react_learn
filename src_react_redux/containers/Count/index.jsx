import CountUI from '../../components/Count'
import {connect}  from 'react-redux'





export default   connect(
state=>({count:state}),
{
  _add:(data)=>({type:'add',data}),
  _sub:(data)=>({type:'sub',data})
}


)(CountUI)