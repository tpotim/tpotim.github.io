var urlService = new function(){
    var _HOST = "resource";
    var _config = {
        articles: _HOST + '/articles.json',
        article: _HOST + '/articleDetail.json'
    };

    // 获取服务url
    this.getUrl = function(svc){
        return _config[svc];
    };

    // 获取url中的参数值
    this.getParamVal = function( name, url ) {
        if (!url) url = decodeURI(location.href);
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }    
};