
//IMPORT MODULES
import * as api from '../api/index.js';


//API FN CALL; API FN RESPONSE
/*
export const fnName = (arg) => async (dispatch) => {
  try {
    const { data } = await api.fnNme(arg);            -->calls  api fns  and await for response
    dispatch({ type: actionTypeVar, payload: data }); -->receive res from api fns and  and dispatch response with actionType on redux store) 
  } 
  catch (error) {
    console.log(error.message);
  }
};
 
 */
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const FETCH_ALL = 'FETCH_ALL';
const LIKE = 'LIKE';
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};