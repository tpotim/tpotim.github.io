
// view model
ko.applyBindings(new function(){
    var self=this;
    self.title = ko.observable();
    self.author = ko.observable();
    self.time = ko.observable();
    self.content = ko.observable();
    self.relatedArticles = ko.observableArray();
    self.dataReceived = ko.observable(false);

    // 加载文章内容
    self.loadArticle = function(articleId, parentId){
        articleService.getArticleDetail(articleId, parentId, function(data){
            self.dataReceived(true);
            $('.related').removeClass('hide');
            self.title(data.article.title);
            self.author(data.article.author);
            self.time(data.article.time);
            self.content(data.article.content);
            for(var i=0; i<data.article.relatedArticles.length; i++){
                self.relatedArticles.push(data.article.relatedArticles[i]);
            }
        }, function(){
            self.dataReceived(true);
            $('.related').removeClass('hide');
            alert('获取文章异常，请稍后再试');
        });
    };

    // 打开新文章
    self.goToArticle = function(article){
        location.href = 'article.html?id=' + article.id + "&parentId=" + article.parentId;
    };

    var articleId = urlService.getParamVal('id');
    var parentId = urlService.getParamVal('parentId');
    self.loadArticle(articleId, parentId);
});