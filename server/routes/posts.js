//IMPORT EXTERNAL MODULE
var express = require('express');
//IMPORT MODULE
var {getPosts,getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/posts')

const router = express.Router();


//ROUTE FN
/* #region Main */
/*
router.post('/endPoint/:param1/:param2',(req,res)=>{})   -->For endpoint ; apply the function that performs create operation 
router.get('/endPoint/:param1/:param2',(req,res)=>{})    -->For endpoint ; apply the function that performs get operation 
router.put('/endPoint/:param1/:param2',(req,res)=>{})    -->For endpoint ; apply the function that performs update operation on enture resource 
router.patch('/endPoint/:param1/:param2',(req,res)=>{})  -->For endpoint ; apply the function that performs update operation on required part
router.delete('/endPoint/:param1/:param2',(req,res)=>{}) -->For endpoint ; apply the function that performs delete operation 
                                                            (req,res,next look in app.js ka custom middleware)
*/
/* #endregion */

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


//EXPORT
module.exports = router;


