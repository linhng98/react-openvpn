import { combineReducers } from 'redux'
import verify from './verify'

const rootReducer = combineReducers({
  verify: verify
});

export default rootReducer