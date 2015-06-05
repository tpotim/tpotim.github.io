var pool = require('./db');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  res.send('It works!');
});

// sql 
app.post('/sql', function(req, res){
  var sqlStr = req.body.sql;

  // 从数据库连接池获取连接
  pool.getConnection(function(err, connection) {
    if(err){
      res.json({err: err});
      return;
    }
    // 执行sql
    connection.query(sqlStr, function(err, rows, fields) {
      // 释放连接
      connection.release();
      // http响应
      res.json({
        err: err, 
        rows: rows, 
        fields: fields
      });      
    });
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

// 启动http服务端
var server = app.listen(3366, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('server is listening at http://%s:%s', host, port);
});