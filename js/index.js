$(function() {

    var progressbar = $("#progressbar"),
        progressLabel = $(".progress-label");

    progressbar.progressbar({
        value: false,
        change: function() {
            progressLabel.text(progressbar.progressbar("value") + "%");
        },
        complete: function() {
            progressLabel.text("100%");
        }

    });

    function progress() {
        var val = progressbar.progressbar("value") || 0;

        progressbar.progressbar("value", val + 10);

        if (val < 99) {
            setTimeout(progress, 10);
        }
        if (val >= 100) {
            init();
        }
    }

    setTimeout(progress, 100);

    function init() {
        $("#progressbar").hide();
        $(".wrap").show();
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true,
            onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        });


    }
});
