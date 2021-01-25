const initPersonState=[{id:'001',name:'peter',age:18}]
export   default function countReducer(preState=initPersonState,action){
  const {type,data}=action
  // console.log(preState)
  switch (type) {
    case 'add_person':
      return [data,...preState];
  
    default:
      return preState
  }
}