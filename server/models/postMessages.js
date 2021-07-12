//IMPORT EXTERNAL MODULES
var express = require('express');
var mongoose = require('mongoose');


//CREATE COLLECTION
/*
database
 |-collections    -- Hold the collection of documents  (Collection in NoSQL is Similar to table in SQL)
    |-doucuemnt1  -- documents are objects {key:value} (Doucuemnt in NoSQL is Similar to row in SQL)  

const postSchema = mongoose.Schema({                   
        _id       :ObjectId  --every document in collection  is given   a unique id  by mongodb  (no need to write this )      
        count     :number,                     
        isEmployed:Boolean     
        name      :String,
        tags      :[ String ],
        type      :{courseName:String, courseId:number}
        date      : Date
        count     :{type:number,default:0}
        date      :{type;date , default:new Date()}



})

var PostMessage = mongoose.model('PostMessage', postSchema);  -->create collection PostMessage where each document has schema postSchema
*/
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
var PostMessage = mongoose.model('PostMessage', postSchema);

//EXPORT
module.exports = PostMessage;
