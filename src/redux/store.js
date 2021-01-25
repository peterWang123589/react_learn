import  {createStore,combineReducers} from 'redux'
import  countReducer from './reducers/count'
import  personReducer from './reducers/person'
const allReducer=combineReducers({
  count_total:countReducer,
  person_members:personReducer
})
export default createStore(allReducer)