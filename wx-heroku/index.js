var express = require('express');
var url = require('url');
var crypto = require('crypto');
var https = require('https');
var app = express();

// 微信接口配置
var wechatAppId = 'wxba3f64b4404ee9ac';
var wechatAppSecret = '8101b28028e0c369a7919ab1df49cb6a';
var wechatToken = 'test001';

// 缓存微信access_token和ticket
var wechatAccess = {};

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


// 验证微信服务器地址的有效性
app.get('/validate-wx-server', function(req, res) {

  // 获取GET请求的参数
  var query = url.parse(req.url, true).query;
  console.log('query param is ' + JSON.stringify(query));

  // 验证请求信息: 
  var arr = [wechatToken, query.timestamp, query.nonce];
  // 字典序排序
  arr.sort();
  // sha1 加密  
  var msg = arr[0] + arr[1] + arr[2];
  var sha1 = crypto.createHash('sha1');
  sha1.update(msg);
  msg = sha1.digest('hex');

  res.set('Content-Type', 'text/plain');
  if(msg == query.signature) {
      // 验证成功,返回echostr
      res.send(query.echostr);
  } else {
      // 验证失败
      res.send('Hello world\n');
  }
});

// 获取access_token和ticket
app.get('/token', function(req, res){

  getWechatAccess(function(wechatAccess){
    res.json(wechatAccess);
  });

});

// 获取JS-SDK所需的配置信息:appId, timestamp, nonceStr, signature
app.get('/wx-config', function(req, res) {    

    getWechatAccess(function(wechatAccess){

      var ret = {appId: wechatAppId};

      // ticket
      var ticket = wechatAccess.ticket;

      var queryParam = url.parse(req.url, true).query;
      console.log('query param in verify: ' + JSON.stringify(queryParam));

      // 解码query paramter中的pageUrl，传到服务器之前需encodeURIComponent编码。
      var pageUrl = decodeURIComponent(queryParam.url);

      // timestamp
      ret.timestamp = parseInt(new Date().getTime() / 1000) + '';

      // noncestr
      ret.nonceStr = Math.random().toString(36).substr(2, 15);

      // signature
      var str = 'jsapi_ticket=' + ticket + '&noncestr=' + ret.nonceStr + '&timestamp='+ ret.timestamp +'&url=' + pageUrl;
      var sha1 = crypto.createHash('sha1');
      sha1.update(str);
      ret.signature = sha1.digest('hex');

      res.json(ret);

    });
});

// error handlers
app.use(function(err, req, res, next) {
  console.log(JSON.stringify({error: err}));
  res.status(err.status || 500).send('error happened');
});

// 启动server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// 获取access_token和ticket
function getWechatAccess(fn){
  // token未失效，继续使用
  if(wechatAccess.tokenExpireAt > new Date().getTime()){
    fn(wechatAccess);
    return;
  }

  // token已失效，重新获取  
  var baseUrl = 'https://api.weixin.qq.com/cgi-bin/';
  var tokenUrl = baseUrl + 'token?grant_type=client_credential&appid=' + wechatAppId + '&secret=' + wechatAppSecret;

  https.get(tokenUrl, function(_res) {
      _res.on('data', function(d) {

        wechatAccess.token = JSON.parse(d.toString()).access_token;
        wechatAccess.tokenExpireAt = (JSON.parse(d.toString()).expires_in)*1000 + new Date().getTime();

        var ticketUrl = baseUrl + 'ticket/getticket?access_token=' + wechatAccess.token + '&type=jsapi';
        https.get(ticketUrl, function(_res){
          _res.on('data', function(d){

            wechatAccess.ticket = JSON.parse(d.toString()).ticket;
            wechatAccess.ticketExpireAt = (JSON.parse(d.toString()).expires_in)*1000 + new Date().getTime();

            if(fn){
              fn(wechatAccess);
            }            
          })
        });        
      });
  });
}