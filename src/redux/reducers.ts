import { combineReducers } from "redux";
import {
  firebaseReducer
} from 'react-redux-firebase'

export const reducer = combineReducers({
  firebase: firebaseReducer,
});