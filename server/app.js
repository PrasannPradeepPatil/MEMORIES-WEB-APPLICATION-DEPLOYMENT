//IMPORT EXTERNAL MODULES
var express = require('express');            //sudo npm install express  --save(while project creation)
var mongoose = require('mongoose')           //sudo npm install mongoose --save(while creating project) 
var cors = require('cors');                  //sudo npm install cors     --save(while creating project)  
var cookieParser = require('cookie-parser'); //sudo npm install (while project creation)
var logger = require('morgan');              //sudo npm install (while project creation)
var debug = require('debug');                //sudo npm install (while project creation)
var createError = require('http-errors');    //sudo npm install (while project creation)
var jade = require('jade');                  //sudo npm install (while project creation)
var path = require('path');                  //sudo npm install (while project creation)
//IMPORTS MODULES
var postsRouter = require('./routes/posts');

var app = express();

//GLOBAL VARIABLE, ENV VARIABLES(APPLIED TO ALL ENDPOINTS)
/* #region Main */
/*
//GLOBAL VAR
app.set('varName',value);
app.get('varName');

//ENV VAR
>export/set VAR_NAME=value  //linux/windows
>process.env.VAR_NAME




  
*/
/* #endregion */
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');


//INBUILT MIDDLEWARE FNS(APPLIED ON  ALL ENDPOINTS)
/* #region Main */
/*
var express = require('express');           //sudo npm install express --save 
var path = require('path'); 
var logger = require('morgan');

app.use(logger('dev'));         -->For every endpoint,apply logger() fn
app.use(express.json());        -->For every endpoint,apply json() fn
*/
/* #endregion */
app.use(express.json({limit:"30mb",extended:true}));         //express.json()     fn parses req body(raw body) into json populates req.body with json ;returns a middleware fn  ; limit sets the limit of req body ;extended allows to choose between parsing req body with the querystring library (when false) or the qs library (when true). 
app.use(express.urlencoded({limit:"30mb",extended: true }));//express.urlencoded()fn parses req body(encoded)  into json populates req.body with json ;returns a middleware fn  ; limit sets the limit of req body ;extended allows to choose between parsing req body with the querystring library (when false) or the qs library (when true). 
app.use(express.static(path.join(__dirname, 'public')));   //express.static()     fn serves static file in public folder
app.use(cookieParser());                                   //cookieParser()      fn parse cookie header populate req.cookies with an object keyed by the cookie names.
app.use(logger('dev'));
app.use(cors());


//ROUTES MIDDLEWARE FNS(APPLIED ON GIVEN END POINTS)
/* #region Main */
/*


var postsRouter = require('./routes/posts');  
app.use('/posts', postsRouter);                   -->For endpoint /posts;apply the functions inside routes/posts.js  and inside posts.js  / =  /user  
*/
/* #endregion */                              
app.use('/posts',postsRouter)        


//CUSTOM MIDDLEWARE FNS(APPLIED ON  ALL ENDPOINTS) 
/* #region Main */
/*
app.use(function(req, res, next) {   -->For all endpoints; apply the function
  next(createError(404));});          req.query                            -->returns {param1:value1,param2:Value2}  where params , values sent by URL query}
                                      req.body                             -->returns {body} where body is sent by url                    
                                                    
                                      res.send("Message")                  -->send object to client
                                      res.json(obj)                        -->send json equivalent of obj to client                                                                                                                                                       
                                      res.status(errcode).send("Message")  -->send status error code:message to client
                                      res.status(errcode).json(obj)        -->send status error code:json equivalent of obj to client
                                                  |--LOOK IN WEB ARCH 
                                                      
                                      next()                               -->send response to next middleware 

*/
/* #endregion */
app.use(function(req, res, next) {       // catch 404 and forward to error handler
  next(createError(404));
});
app.use(function(err, req, res, next) {  // error handler
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




//CONNECT  MONGODB TO SERVER(ATLAS);CREATE DB
/*
//CONNECT  MONGODB TO SERVER(ATLAS)-->https://www.youtube.com/watch?v=ngc9gnGgUdA&t=522s  :10:30 TO 13:00
const CONNECTION_URL = 'connection url received from atlas';
const PORT = process.env.PORT||5000;(client runs at 3000, server runs at 3000 so 1st run server and then run client so client automatically runs at 3001;so server runs at 30002 )
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })            
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


*/
const CONNECTION_URL = 'mongodb+srv://prasann:prasann123@cluster0.qb7ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;  
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

//EXPORT
module.exports = app;    

