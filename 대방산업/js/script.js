//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex =  $('.gnb > li > a').index($(this));
        //alert(gnbindex);
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave', function(){
        $('.gnb .inner').removeClass('on');
    });
});

//fixheader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixheader();

//윈도우 창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixheader();
});

//고정해더 함수 => fixheader();
function fixheader(){
    if(scrollFix > 150){
        $('header').addClass('on');
    }else {
        $('header').removeClass('.on');
    }
}

//글자 애니메이션 Splitting 메모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

//.top.visual 이미지 슬라이드
$(function(){
    $('.visual .slide').slick({
        arrow:true,//화살표
        dots:true,//인디케이터
        autoplay: true, // 자동재생
        fade: true, // 페이드인 효과
        autoplaySpeed:7000, // 재생시간
        pauseOnHover:false, // 호버시 멈추는 것을 해재
        pauseOnFocus:false
    });
    $('.slick-prev').text('prev');

    //두번째 슬리이드
    $('.slide2').slick({
        arrow:false,//화살표
        dots:true,//인디케이터
        autoplay: true, // 자동재생
        infinte:true, // 무한반복
        slidesToShow:2, //slide가 두개만 보일수 있도록
        slidesToScroll:1, //slide가 스크롤 될때 한번씩 스크롤 되도록      
        autoplaySpeed:6000, // 재생시간 6초
        pauseOnHover:true, // 호버시 멈추도록 설정함
        pauseOnFocus:true
    });
    $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
    $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
    $(".slide2 #slick-slide-control12").text("화성동탄1차 대방디엠시티 더 센텀");
    $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드6차");
});