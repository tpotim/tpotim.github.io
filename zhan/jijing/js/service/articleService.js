var articleService = new function(){

    // 查询文章列表
    this.getArticles = function(tag, pageNo, sucFn, failFn){
        $.getJSON(urlService.getUrl('articles'), {
            op: 'weixin_interface_ielts_speaking',
            tag: encodeURIComponent(tag),
            pageNo: pageNo,
            pageSize: 6
        })
        .done(function(data){
            data = data.body;
            if(data.ok){
                sucFn(data);
            }else{
                alert(data.errMsg);
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            if(failFn){
                failFn();
            }else{
                alert( "Request Failed: " + textStatus + ", " + error );
            }            
        });
    }

    // 查询文章详细内容
    this.getArticleDetail = function(articleId, parentId, sucFn, failFn){
        $.getJSON(urlService.getUrl('article'), {
            op: 'weixin_interface_ielts_speaking_detail',
            id: articleId,
            parentId: parentId
        })
        .done(function(data){
            data = data.body;
            if(data.ok){
                sucFn(data);
            }else{
                alert(data.errMsg);
            }
        })
        .fail(function( jqxhr, textStatus, error) {
            if(failFn){
                failFn();
            }else{
                alert( "Request Failed: " + textStatus + ", " + error );
            }            
        });
    }
}

