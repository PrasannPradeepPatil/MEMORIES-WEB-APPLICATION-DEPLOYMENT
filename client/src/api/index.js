//IMPORT EXTERNAL MODULE
import axios from 'axios';   //sudo npm install axios


//API FN SEND; API FN RECEIVE
/*
const url = 'http://localhost:PortNoWhereMongoDbIsConnectedToSever/routeWhereCrudOperationsTakePlace'
export const createPost = (arg)     => axios.post(url, arg);                -->For endpoint ;send and receive data for create operation 
export const getPosts   = ()         => axios.get(url);                     -->For endpoint ;send and receive data for get operation 
export const updatePost = (id,arg)   => axios.patch(`${url}/${id}`,arg);    -->For endpoint ;send and receive data for update operation
export const deletePost = (id,arg)   => axios.delete(`${url}/${id}`);       -->For endpoint ;send and receive data forperforms delete operation 


*/

const url = 'http://localhost:5000/posts';
export const createPost = (newPost) => axios.post(url, newPost);
export const getPosts   = () => axios.get(url);
export const likePost   = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);


