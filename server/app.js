var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var debug = require("debug");
var createError = require("http-errors");
var jade = require("jade");
var path = require("path");
var dotenv = require('dotenv');             

var postsRouter = require("./routes/posts");

var app = express();
dotenv.config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors());

app.use("/posts", postsRouter);
app.get("/", (req, res) => {
  res.send("Hello, Welcome to Memories");
});

app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

const MONGODB_CONNECTION_PORT = process.env.MONGODB_CONNECTION_PORT|| 5000;  
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
mongoose
  .connect(MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(MONGODB_CONNECTION_PORT, () =>
      console.log(`Server Running on Port: http://localhost:${MONGODB_CONNECTION_PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

module.exports = app;
