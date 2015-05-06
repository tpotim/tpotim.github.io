ko.applyBindings(new function(){
    var self=this;
    self.title = ko.observable();
    self.author = ko.observable();
    self.time = ko.observable();
    self.content = ko.observable();
    self.relatedArticles = ko.observableArray();

    // 加载文章内容
    self.loadArticle = function(articleId){
        articleService.getArticleDetail(articleId, function(data){
            self.title(data.article.title);
            self.author(data.article.author);
            self.time(data.article.time);
            self.content(data.article.content);
            for(var i=0; i<data.article.relatedArticles.length; i++){
                self.relatedArticles.push(data.article.relatedArticles[i]);
            }
        });
    };

    // 打开新文章
    self.goToArticle = function(article){
        location.href = 'article.html?id=' + article.id;
    };

    var articleId = urlService.getParamVal('id');
    self.loadArticle(articleId);
});