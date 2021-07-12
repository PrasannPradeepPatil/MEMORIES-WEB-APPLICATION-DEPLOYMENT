
//IMPORT EXTERNAL MODULES
var express = require('express');
var mongoose = require('mongoose');
//IMPORT MODULES
var PostMessage = require('../models/postMessages');

const router = express.Router();

//CREATE
/*
exports.createPost = async (req, res) => {
    const newPostMessage = new PostMessage({obj based on collection schema})              -->create collection PostMessage
                                                                                       
    try {
        await newPostMessage.save();                                                       -->save collection PostMessage to database
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

*/
exports.createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } 
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//READ
/*
exports.getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.methood();              -->return array of documents from collection postMessages based on method 
        res.status(200).json(postMessages);                              METHODS 
    }                                                                   .find()                   -->filter no documents 
    catch (error) {                                                     .find({id:1,name:'pras'}) -->filter document that have id as 1 and name as 'pras'
        res.status(404).json({ message: error.message });               .findById(id)             -->-->filter document that have id 
                                                                        .sort({name:1/-1})        -->sort documents by asc/dec order
    }                                                                   .select({name:1,id:1})    -->select only the name and  id property of each document 
}                                                                       .count()                 -->return count of document
                                                                        .skip(10)                -->skip 1st 10 documents
                                                                        .limit(10)               -->limit 10 documents

                                                                        FILTER OBJECT
                                                                        //COMPARISION OPERATOR    
                                                                        .method(key:{$operator : value })
                                                                        eq  : equal to
                                                                        ne  : not equal to
                                                                        gt  : gteater that
                                                                        gte : greater than equal to
                                                                        lt  :less than
                                                                        lte :less than equal ti
                                                                        in  :in
                                                                        ni  : not in 

                                                                        EG
                                                                        .find({'price':10})-->filter document that have price as 10 
                                                                        .find({'price':{gt:10,lte:20}})--->filter document that have  10<price 10<= 20
                                                                        .find({'price':{in:[10,15,20]}})--->filter document that have  price=10 price =15 price=20 
                                                                        
                                                                        //LOGICAL OPERATOR:
                                                                        .method().operator(obj1,obj2)
                                                                        or -- or
                                                                        and -- and
                                                                        EG
                                                                        .find()
                                                                        .or({name:prass},{id:1})  -->filter document that have name 'pras' OR id 1
                                                                        .find()
                                                                        .and({name:prass},{id:1})  -->filter document that have name 'pras' AND id 1

                                                                        //REGULAR EXPRESSION
                                                                        .method(key:{/RE/i})
                                                                        RE : look in JAVA APPLICATIOP ;i:case insensitive
                                                                        ^ : startswith
                                                                        $ : endswith
                                                                        .  :anycharachet
                                                                        * :0 or more characters
                                                                        EG
                                                                        .find(name: '^pras')  -->filter document that have name starting with 'pras' 
                                                                        .find(name:'pras$')   -->filter document that have name ending with 'pras' 
                                                                        .find(name:'.*pras.*')-->filter document that have name containing  'pras' 
    
 
}
*/
exports.getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.getPost = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//UPDATE
/*
exports.updatePost = async (req, res) => {
    await PostMessage.method();  -->return array of updated documents from collection PostMessage based on method
                                    METHODS
                                    update(                                -->filter documents based on filterObject;
                                        {filterObject},                         update documents based on updateOperator,updateObject
                                        $updatePperator :{updatedObject}) 
                                    findByIdAndUpdate(                      -->filter documents based on id;
                                        id,                                     update documents based on updateOperator,updateObject
                                        $updatePperator :{updatedObject}
                                        {new:True} )
                                    insert(                                 -->insert documents insertObj1 , insertObj2 
                                        {insertObj1}, 
                                        {insertObj2}
                                    )    

                                    FILTER OBJECT
                                    Same as READ


                                    UPDATE OBJECT AND UPDATE OPERATOR--https://docs.mongodb.com/manual/reference/operator/update/
                                    //FEILDS
                                    $set: { field1: value1, field2:value2} -- replaces the value of a field with the specified value.
                                    $inc: { field1: amount1,field2:amount2}--increments a field by a specified value  
                                    $other: --look in link

                                    //ARRAYS
                                    Look in Link

                                    //MODIFIER
                                    Look In Link

                                    //BITWISE
                                    Look In Link

                                    EG
                                    PostMessage.update(
                                        {_id:'aboefcc'}
                                        $set:{
                                            name:'pras'
                                            id:22
                                        })
                                    PostMessage.update(
                                        {name:'pras',id:22}
                                        $inc:{
                                            id:33
                                            id:-22
                                        })






*/
exports.updatePost = async (req, res) => {
    const { id } = req.params;if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const { title, message, creator, selectedFile, tags } = req.body;
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    


    res.json(updatedPost);
}
exports.likePost = async (req, res) => {
    const { id } = req.params;if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


//DELETE
/*
exports.deletePost = async (req, res) => {
    await PostMessage.method();             -->return array of updated documents from collection PostMessage based on method
                                             METHHOD 
                                            deleteOne({filterObject})-->find array of  document  filtered by filterObject
                                                                        and delete 1st occurence document 
                                                                        and return result object {n:no of documents deleted(1 always),ok:1} 
                                            deleteMany({filterObject})-->find array of  document  filtered by filterObject
                                                                        and delete all occurence document 
                                                                        and return result object {n:no of documents deleted,ok:1} 
                                            findByIdAndDelete(id)   -->find array of  document  filtered by id
                                                                        and delete all occurence document 
                                                                        and return array of documents after deletion
          
                                            FILTER OBJECT 
                                            Same as READ



}

*/
exports.deletePost = async (req, res) => {
    const { id } = req.params;if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



//EXPORT
exports.router = router;