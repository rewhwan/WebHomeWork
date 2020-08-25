/*window.onload*/
$(function () {

    //변수 선언
    var container = $(".slideshow");
    var slideGroup = container.find(".slideshow_slides");
    var slides = slideGroup.find("a");
    var nav = container.find(".slideshow_nav");
    var prev = nav.find(".prev");
    var next = nav.find(".next");
    var indicator = container.find(".slideshow_indicator");
    var aIndicator = indicator.find("a");

    var currentIndex = 0;
    var intervalObject;

    //이미지를 가로로 배치시켜 줍니다.
    for(var index=0; index<slides.length; index++) {
        var indexLeft = index * 100 + '%';
        slides.eq(index).css("left",indexLeft);
    }


    //화면을 바꿔주는 함수 생성
    function gotoSlide(index) {
        //애니메이션 구현
        slideGroup.animate({left:-100*index+'%'},500,'easeInOutExpo');
        indexDisplay(index);
    }

    function indexDisplay(index) {

        //인디케이터 세팅
        aIndicator.removeClass('active');
        aIndicator.eq(index).addClass('active');

    }

    //==========================================================================================

    function startSlide () {
        intervalObject = setInterval(function () {
            var nextIndex = (++currentIndex) % slides.length;
            gotoSlide(nextIndex);
        },2000);
    }

    function stopSlide () {
        clearInterval(intervalObject);
    }

    //==========================================================================================

    prev.on('click',function () {
        var nextIndex;

        if(currentIndex <=0) currentIndex = 4;

        nextIndex = (--currentIndex) % slides.length;

        console.log('crin: '+currentIndex);
        console.log('nxin: '+nextIndex);
        gotoSlide(nextIndex);
    });

    next.on('click',function () {
        var nextIndex = Math.abs((++currentIndex) % slides.length);
        console.log('crin: '+currentIndex);
        console.log('nxin: '+nextIndex);
        gotoSlide(nextIndex);
    });

    //==========================================================================================

    container.mouseenter(function () {
        stopSlide();
    });

    container.mouseleave(function () {
        startSlide();
    });

    aIndicator.on('click',function () {
        var index = $(this).index();
        gotoSlide(index);
    });

    startSlide();
});