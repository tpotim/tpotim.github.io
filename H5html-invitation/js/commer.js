/* 
* @Author: anchen
* @Date:   2015-03-19 17:25:57
* @Last Modified by:   anchen
* @Last Modified time: 2015-03-20 16:40:23
*/

$(document).ready(function(){
    $(".page-loading .page-fix .hang-load").animate({height:0}, 5000,function(){
    	$(".page-fix").animate({top:23+"%"}, 3000,function(){
            $(".page-loading").fadeOut(1500);
        })
    });

    $('.text-img-wrap .left-img').removeClass('img-hide').addClass('animated slideInDown');
    $('.text-img-wrap .right-img').removeClass('img-hide').addClass('animated slideInUp');

});