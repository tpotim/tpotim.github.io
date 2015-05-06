var articleService = new function(){

    // 查询文章列表
    this.getArticles = function(tag, pageNo, sucFn){
        $.getJSON(urlService.getUrl('articles'), {
            tag: encodeURIComponent(tag),
            pageNo: pageNo,
            pageSize: 6
        })
        .done(function(data){
            if(data.ok){
                sucFn(data);
            }else{
                alert(data.errMsg);
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            alert( "Request Failed: " + textStatus + ", " + error );
        });
    }

    // 查询文章详细内容
    this.getArticleDetail = function(articleId, sucFn, failFn){
        $.getJSON(urlService.getUrl('article'), {
            id: articleId
        })
        .done(function(data){
            if(data.ok){
                sucFn(data);
            }else{
                alert(data.errMsg);
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            alert( "Request Failed: " + textStatus + ", " + error );
        });
    }
}

