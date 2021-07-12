
//IMPORT EXTERNAL MODULE
import { combineReducers } from 'redux';         //sudo npx create-react-app client
//IMPORT MODULE
import posts from './posts';


//COMBINERS
/*
export const reducers = combineReducers({ posts });-- combine all the reducers and put them in redux store
 */
export const reducers = combineReducers({ posts });