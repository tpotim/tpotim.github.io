$(document).ready(function () {
  $.post( wechatServiceUrl.getService("verifyJSSDK"), { url: encodeURI(window.location.href) })
  .done(function( data ) {
    data = JSON.parse(data);
    wx.config({
        debug: false, 
        appId: data.appId,
        timestamp: data.timestamp, 
        nonceStr: data.nonceStr, 
        signature: data.signature,
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] 
      });    
      wx.ready(function(){
        wx.onMenuShareTimeline({
        title: '【小站有考位】神器，免费订阅托福考位快讯~', 
        link: 'http://fz1.tpooo.com/kw/chufen/share.html', 
        imgUrl: 'http://fz.tpooo.com/static/upload/temp/qrcode_8.jpg', 
        success: function () { 
          
        },
        cancel: function () { 
          
        }
        });
        wx.onMenuShareAppMessage({
          title: '【小站有考位】神器，免费订阅托福考位快讯~', 
          desc: '【小站有考位】神器，免费订阅托福考位快讯~独家实时考位信息即时推送，连黄牛都在用，让我们陪伴你，直到成功留学吧！',
          link: 'http://fz1.tpooo.com/kw/chufen/share.html', 
          imgUrl: 'http://fz.tpooo.com/static/upload/temp/qrcode_8.jpg', 
          success: function () { 
            
          },
          cancel: function () { 
            
          }
        });
      }); 
  })
  .fail(function(data) {
    alert( "verifyJSSDK error" );
  });
    
});