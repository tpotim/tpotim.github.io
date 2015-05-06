ko.applyBindings(new function(){
    var self=this;
    self.content = ko.observableArray();
    self.people = ko.observable(true);
    self.thing = ko.observable(false);
    self.place = ko.observable(false);
    self.eventValue = ko.observable(false);
    self.hasMore = ko.observable(false);
    var curPageNo = 1;
    var curTag = 'people';

    // 显示标签对应的文章
    self.getTag = function(tag){
        curTag = tag;
        self.people(false);
        self.thing(false);
        self.place(false);
        self.eventValue(false);
        self[tag](true);
        self.content.removeAll();
        $(".loading").show();

        articleService.getArticles(tag, 1, function(data){
            for(var i=0;i<data.content.length;i++){
                self.content.push(data.content[i]);
            } 
            self.hasMore(true);
            $(".loading").hide();  
        });
    };

    // 加载更多文章
    self.getMore = function(){
        self.hasMore(false);
        $(".loading").show();

        articleService.getArticles(curTag, ++curPageNo, function(data){
            self.hasMore(true);
            $(".loading").hide();            
            for(var i=0;i<data.content.length;i++){
                self.content.push(data.content[i]);
            }
        });
    };

    // 打开新文章
    self.goToArticle = function(article){
        location.href = 'article.html?id=' + article.id;
    };

    self.getTag('people');
});