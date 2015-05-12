var urlService = new function(){
    var _HOST = "http://supesite.tpooo.net";
    var _config = {
        articles: _HOST + '/ajax.php',
        article: _HOST + '/ajax.php'
    };

    // 获取服务url
    this.getUrl = function(svc){
        return _config[svc];
    };

    // 获取url参数值
    this.getParamVal = function( name, url ) {
        if (!url) url = decodeURI(location.href);
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }    
};