/*!
 * Hux Blog v1.0.0 (http://huxpro.github.io)
 * Copyright 2015 Hux
 */
// 判断是不是博文页面
function isPages(attr){
    var currentBoolean = document.querySelector('.navbar.navbar-custom').getAttribute(attr);
    if(currentBoolean === 'true'){return true;}
    return false;
};

/*
    滚动函数
    接收三个参数,
        1 接收一个DOM对象
        2 给目标对象切换class
        3 触发的高度 (可选项,如果不指定高度,会将DOM的高度作为触发高度)
*/
function scrollCheck(scrollTarget, toggleClass, scrollHeight){
    document.addEventListener('scroll',function(){
    var currentTop = window.pageYOffset;
        currentTop > (scrollHeight||scrollTarget.clientHeight)
        ?scrollTarget.classList.add(toggleClass)
        :scrollTarget.classList.remove(toggleClass)
    })
};

(function(){
    if(!isPages('data-ispost')){
        var navbar = document.querySelector('.navbar.navbar-custom')
        navbar.classList.add('is-fixed');
        navbar.classList.add('is-visible');
    }
})();
$(function () {
    $("[data-toggle='tooltip']").tooltip()
}), $(document).ready(function () {
    $("table").wrap("<div class='table-responsive'></div>"), $("table").addClass("table")
}), $(document).ready(function () {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), $('iframe[src*="youtube.com"]').addClass("embed-responsive-item"), $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), $('iframe[src*="vimeo.com"]').addClass("embed-responsive-item")
}), jQuery(document).ready(function (a) {
    var b = 1170;
    if (a(window).width() > b) {
        var c = a(".navbar-custom").height();
        a(window).on("scroll", {
            previousTop: 0
        }, function () {
            var b = a(window).scrollTop();
            if (!isPages('data-ispost')) {
                b < this.previousTop ? b > 0 && a(".navbar-custom").hasClass("is-fixed") ? (a(".navbar-custom").addClass("is-visible")/*,a(".page-post-title").removeClass("hide")*/) : a(".navbar-custom").addClass("is-visible is-fixed"): (a(".navbar-custom").removeClass("is-visible"), b > c && !a(".navbar-custom").hasClass("is-fixed") && a(".navbar-custom").addClass("is-fixed")), this.previousTop = b
            }
            if (isPages('data-ispost')) {
                var introHeader = document.querySelector('.intro-header').offsetHeight;
                var introHeader = introHeader > 497 ? introHeader : 400;
                var toc = document.querySelector('.toc-wrap');
                b < this.previousTop ? b > 0 && a(".navbar-custom").hasClass("is-fixed") ? (a(".navbar-custom").addClass("is-visible"), a(".page-post-title").removeClass("hide")) : (a(".navbar-custom").removeClass("is-visible is-fixed"), a(".page-post-title").addClass("hide")) : (a(".navbar-custom").removeClass("is-visible"), b > c && !a(".navbar-custom").hasClass("is-fixed") && a(".navbar-custom").addClass("is-fixed")), this.previousTop = b
                scrollCheck(toc,'toc-fixed',introHeader-60);
            }
        })
    }
});

(function () {
    var navTop = document.querySelector('#nav-top');
    navTop.ondblclick = function () {
        $('body').animate({
            scrollTop: 0
        }, 500)
    }
})();