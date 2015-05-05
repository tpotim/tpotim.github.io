var express = require('express');
var router = express.Router();
var request = require('request');

var dbUrl = 'http://localhost:5984/test1';

// get all doc
router.post('/getAll', function(req, res, next) {
  var url = dbUrl + '/_design/d1/_view/all_doc';
  request(url, function (error, response, body) {
    console.log(body);
    debugger;
    if (!error && response.statusCode == 200) {
      //console.log(body);
      res.json(body);
    }else{
      res.json({err: error});
    }
  });
});

// get doc by id
router.post('/getDoc/:docId', function(req, res, next) {
  
  var url = dbUrl + '/' + req.params.docId;
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body);
      res.json({doc: JSON.parse(body)});
    }else{
      res.json({err: error});
    }
  });
});


// save doc
router.post('/save', function(req, res, next) {
  console.log(req.body);
  req.body.createAt = (new Date()).getTime();
  request.post({
    url: dbUrl,
    headers:{'content-type' : 'application/json'},
    json: true,
    body: req.body    
  }, function (error, response, body) {
      if(response.statusCode == 201){
        res.json({ok:1});
      } else {
        res.json({errCode: response.statusCode, errMsg: body});
        //console.log('error: '+ response.statusCode);
      }
   });
});

router.post('/delete', function(req, res, next) {
  var url = dbUrl + '/' + req.body.docId + "?rev=" + req.body.docRev;
  request.del(url, function(error, response, body) {
    console.log(response);
    if( 200 == response.statusCode){
      res.json({ ok: 1});
    }else{
      res.json({ err: error});
    }
  });
});


module.exports = router;
