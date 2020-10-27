var createError = require("http-errors");
var express = require("express");
var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var winston = require('./config/winston');

var app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan('tiny', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

let usersRouter = require("./src/routes/user.route");
app.use("/users", usersRouter);

let locationRouter = require("./src/routes/grigriLocation.route");
app.use("/grigriLocation", locationRouter);

let pointsRouter = require("./src/routes/points.route");
app.use("/points", pointsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
