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
app.use('/page', express.static(path.join(__dirname, 'page')));



app.get('/', function(req, res){
  res.send('server 1010 works!');
});


app.post('/save', function(req, res){

  var pageId = req.body.pageId || new Date().getTime();

  var filePath = path.join('public','page', pageId + '.html');

  fs.writeFile(filePath, req.body.content, function(err, written, string){
    if(err){
      res.json({ok: false, error: err});
    }else{
      res.json({ok: true, pageId: pageId});
    }
  })
  
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


var server = app.listen(1010, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('server 1010 is listening at http://%s:%s', host, port);
});