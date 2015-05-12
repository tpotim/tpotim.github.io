
// view model
ko.applyBindings(new function(){
    var self=this;
    self.content = ko.observableArray();
    self.people = ko.observable(true);
    self.thing = ko.observable(false);
    self.place = ko.observable(false);
    self.eventValue = ko.observable(false);
    self.hasMore = ko.observable(false);
    var curTag = '';
    var curPageNo = 1;
    

    // 显示标签对应的文章
    self.getTag = function(tag, tagName){
        $(".wheel-button").click();
        self.people(false);
        self.thing(false);
        self.place(false);
        self.eventValue(false);
        self[tag](true);

        curTag = tagName; // 服务端使用
        curPageNo = 1;
        self.content.removeAll();
        loadArticle(curTag, curPageNo);
    };

    // 获取更多文章
    self.getMore = function(){
        loadArticle(curTag, ++curPageNo);
    };

    // 加载文章列表
    function loadArticle(tagName, pageNo){
        self.hasMore(false);
        $('.loading').show();
        articleService.getArticles(tagName, pageNo, function(data){
            // 查询成功
            $('.loading').hide();
            for(var i=0; i<data.content.length; i++){
                self.content.push(data.content[i]);
            }
            self.hasMore(data.hasMore);
        }, function(){
            // 查询失败
            $('.loading').hide();
            alert('获取文章异常，请稍后再试');
        });
    };

    // 打开新文章
    self.goToArticle = function(article){
        location.href = 'article.html?id=' + article.id + "&parentId=" + article.parentId;
    };

    self.getTag('people', '人物类');
});