import { combineReducers } from 'redux';
import userReducer from './reducer'
const appReducer = combineReducers({
  user: userReducer
});

const rootReducer = (state, action) => {
  console.log('===ACTION===', action.type, state);
  return appReducer(state, action);
};

export default rootReducer;
