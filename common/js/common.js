$(document).ready(function(){
	new WOW().init();
	opacity_box();
	// wow플러그인
	
	fullset();
	quickClick();
	// 풀페이지
	
	scrollDown();
	// 메인페이지 첫번째 섹션에서 두번째 섹션으로 스크롤 다운 버튼
	
	main_dotdotdot();
	// 메인페이지 BLOG 슬라이드 말줄임

	main_slide();
	// 메인페이지 BLOG 슬라이드

	topBtnOn();
	// 탑버튼 기능

	selectBox();
	// select박스 커스텀

	portfolioOpen();
	portfolioClose();
	// 포트폴리오 모달창

	catalogTab();
	// 전자카탈로그 영상 탭

	langToggle();
	// 헤더 언어 토글버튼

	mainPopUpClose();
	// 메인페이지 팝업창 닫기

	governmentTab();
	// 정부지원사업 비디오 탭

	governmentFixedBtn();
	// 정부지원사업 우측 고정 버튼


	hamburger();
	// 모바일 햄버거 버튼 열고 닫기

	mobile_header();
	// 모바일 서브메뉴

	headerBGchange();
	// 헤더색상 특정섹션에서 변경
});

function headerBGchange(){
	if ($('.service').length === 0) {
        return; 
    }
	
	var $header = $('header'); //헤더를 변수에 넣기
	var $page = $('.black_section'); //색상이 변할 부분
	var $window = $(window);
	var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
	
	$window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
		pageOffsetTop = $page.offset().top;
	});
	
	$window.on('scroll', function(){ //스크롤시
		var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
		$header.toggleClass('black', scrolled); //클래스 토글
	});

	
}
// ---------------------------검정배경 섹션에 닿았을 때 header BG색상 변경---------------------------



function mobile_header(){
    $(window).resize(function(){ 
        if (window.innerWidth < 1600) {
            $('header nav > ul > li > a.disableLink').click(function(){
        
                $(this).nextAll('ul').slideToggle(400);
                $(this).parent().siblings('li').children('ul').slideUp('fast');
                return false;
            })
        
        } else {
        
        /* 스크립트내용*/ 
        
        }
        
        }).resize(); 
}
// ---------------------------모바일 서브메뉴---------------------------


function hamburger(){
	$('.hamburger').click(function(){
		$('header').toggleClass('active');
		if($('header').hasClass('active')){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
	})
}
// ---------------------------모바일 햄버거 버튼 열고 닫기---------------------------


function opacity_box(){
    setTimeout(function() { 
        $('.wow').removeClass('opacity_box');
    }, 200);
}

// ---------------------------wow 플러그인---------------------------


function governmentFixedBtn(){
	$(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $('.right_fixedBtn').addClass('active');
        }else if($(this).scrollTop() >= 100){
            $('.right_fixedBtn').removeClass('active');
        }

    });
}
// ---------------------------정부지원사업 우측 고정 버튼---------------------------

function mainPopUpClose(){
	$('.main_popUp_close').click(function(){
		$('.main_popUp').removeClass('active');
	})
}
// ---------------------------메인페이지 팝업창 닫기---------------------------

function governmentTab(){
	$('.government_support .btnBox button').click(function(){
		$('.government_support .btnBox button').removeClass('active');
		$(this).addClass('active');
		
		var contentList = $('.government_support .contentBox li');
		var contentList1 = $('.government_support .contentBox .videoBox1');
		var contentList2 = $('.government_support .contentBox .videoBox2');
		var contentList3 = $('.government_support .contentBox .videoBox3');
		var contentList4 = $('.government_support .contentBox .videoBox4');
		
		if($('.government_support .btnBox .button1').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList1).addClass('active');
		}
        if($('.government_support .section_2 .btnBox .button2').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList2).addClass('active');
		}
        if($('.government_support .section_2 .btnBox .button3').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList3).addClass('active');
		}
		if($('.government_support .section_2 .btnBox .button4').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList4).addClass('active');
		}
		
	})
}
// ---------------------------정부지원사업 비디오 탭---------------------------



function catalogTab(){
	$('.catalog_tabBtnBox button').click(function(){
		$('.catalog_tabBtnBox button').removeClass('active');
		$(this).addClass('active');
		
		var contentList = $('.catalog_tabBox > div');
		var contentList1 = $('.catalog_tabBox .catalog_tab1');
		var contentList2 = $('.catalog_tabBox .catalog_tab2');
		var contentList3 = $('.catalog_tabBox .catalog_tab3');
		
		if($('.catalog_tabBtnBox button:nth-child(1)').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList1).addClass('active');
		}
        if($('.catalog_tabBtnBox button:nth-child(2)').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList2).addClass('active');
		}
        if($('.catalog_tabBtnBox button:nth-child(3)').hasClass('active')){
			$(contentList).removeClass('active');
			$(contentList3).addClass('active');
		}
		
	})
}
// ---------------------------전자카탈로그 영상 탭---------------------------


function langToggle(){
	
	$('header .langBox .langBtn_ko').click(function(){
		$('header .langBox .langBtn_ko').removeClass('active');
		$('header .langBox .langBtn_en').addClass('active');
	})
	$('header .langBox .langBtn_en').click(function(){
		$('header .langBox .langBtn_en').removeClass('active');
		$('header .langBox .langBtn_ko').addClass('active');
	})
	
}
// ---------------------------헤더 언어 토글버튼---------------------------



function portfolioOpen(){
	$('.portfolio .section_1 .left li').click(function(){
		$('.portfolio_modalWrap').addClass('active');
		$('.portfolio .section_1 .left li').removeClass('active');
		$(this).toggleClass('active');
		
		var portfolioList = $('.portfolio_modalWrap li');
		var portfolioList1 = $('.portfolio_modalWrap li:nth-child(1)');
		var portfolioList2 = $('.portfolio_modalWrap li:nth-child(2)');
		var portfolioList3 = $('.portfolio_modalWrap li:nth-child(3)');
		var portfolioList4 = $('.portfolio_modalWrap li:nth-child(4)');
		var portfolioList5 = $('.portfolio_modalWrap li:nth-child(5)');
		var portfolioList6 = $('.portfolio_modalWrap li:nth-child(6)');
		
		if($('.portfolio .section_1 .left li:nth-child(1)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList1).toggleClass('active');
		}
        if($('.portfolio .section_1 .left li:nth-child(2)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList2).addClass('active');
		}
        if($('.portfolio .section_1 .left li:nth-child(3)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList3).addClass('active');
		}
        if($('.portfolio .section_1 .left li:nth-child(4)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList4).addClass('active');
		}
		if($('.portfolio .section_1 .left li:nth-child(5)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList5).addClass('active');
		}
		if($('.portfolio .section_1 .left li:nth-child(6)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList6).addClass('active');
		}
		if($('.portfolio .section_1 .left li:nth-child(7)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList7).addClass('active');
		}
		
		if($('.portfolio_modal').hasClass('active')){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
	})

	$('.portfolio .section_1 .right li').click(function(){
		$('.portfolio_modalWrap').addClass('active');
		$('.portfolio .section_1 .right li').removeClass('active');
		$(this).toggleClass('active');
		
		var portfolioList = $('.portfolio_modalWrap li');
		var portfolioList1 = $('.portfolio_modalWrap li:nth-child(7)');
		var portfolioList2 = $('.portfolio_modalWrap li:nth-child(8)');
		var portfolioList3 = $('.portfolio_modalWrap li:nth-child(9)');
		var portfolioList4 = $('.portfolio_modalWrap li:nth-child(10)');
		var portfolioList5 = $('.portfolio_modalWrap li:nth-child(11)');
		// var portfolioList6 = $('.portfolio_modalWrap li:nth-child(12)');
		
		if($('.portfolio .section_1 .right li:nth-child(1)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList1).toggleClass('active');
		}
        if($('.portfolio .section_1 .right li:nth-child(2)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList2).addClass('active');
		}
        if($('.portfolio .section_1 .right li:nth-child(3)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList3).addClass('active');
		}
        if($('.portfolio .section_1 .right li:nth-child(4)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList4).addClass('active');
		}
		if($('.portfolio .section_1 .right li:nth-child(5)').hasClass('active')){
			$(portfolioList).removeClass('active');
			$(portfolioList5).addClass('active');
		}
		// if($('.portfolio .section_1 .right li:nth-child(6)').hasClass('active')){
		// 	$(portfolioList).removeClass('active');
		// 	$(portfolioList6).addClass('active');
		// }
		
		if($('.portfolio_modal').hasClass('active')){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
	})


	// 극지연구소 리뉴얼 후 모달창 추가할때 지우기
	$('.portfolio .section_1 .right li:nth-child(6)').click(function(){
		$('.portfolio_modalWrap').removeClass('active');
		$('.portfolio_modal').removeClass('active');
		if($('.portfolio_modal').hasClass('active')){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
	})
	// 극지연구소 리뉴얼 후 모달창 추가할때 지우기
}
// ---------------------------포트폴리오 모달창 오픈---------------------------

function portfolioClose(){
	$('.portfolio_modal .closeBtn').click(function(){
		$('.portfolio_modalWrap').removeClass('active');
		$('.portfolio_modal').removeClass('active');
		if($('.portfolio_modal').hasClass('active')){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
	})
}
// ---------------------------포트폴리오 모달창 닫기---------------------------

function selectBox(){
	$('.select').css('color','#AAAAAA');
	$('.select').change(function() {
	   var current = $('.select').val();
	   if (current != 'null') {
		   $('.select').css('color','#AAAAAA');
	   } else {
		   $('.select').css('color','#AAAAAA');
	   }
	}); 
}
// ---------------------------select박스 커스텀---------------------------

function showTopBtn(){
	if($('.pageIndex1').hasClass('on')){
		$('.topBtn').addClass('hidden');
		$('.scrollDownBox').addClass('active');
		$('header').addClass('removeBG');
	} else {
		$('.topBtn').removeClass('hidden');
		$('.scrollDownBox').removeClass('active');
		$('header').removeClass('removeBG');
	}
}
// ---------------------------top버튼 메인페이지 숨기기(클래스 부여, css 조정)---------------------------





function topBtnOn(){
	$(".topBtn").click(function(){
		// $("#fullpage").css("top", "0px").animate(1000, "swing");
		$("#fullpage").animate({"top": "0px"}, 1000, "swing");

		$(".pageIndex1").addClass("on");
		if($(".pageIndex1").hasClass("on")){
			$(".pageIndex2").removeClass("on");
			$(".pageIndex3").removeClass("on");
			$(".pageIndex4").removeClass("on");
			$(".pageIndex5").removeClass("on");
			$(".pageIndex6").removeClass("on");
			$(".pageIndex7").removeClass("on");
			$(".pageIndex8").removeClass("on");
		}
		showTopBtn();
	})
    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $('.topBtn').fadeOut();
        }else if($(this).scrollTop() >= 100){
            $('.topBtn').fadeIn();
        }
    });
    $(".topBtn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700);
        return false;
    });
}
// ---------------------------탑버튼 기능---------------------------



function scrollDown(){

	$(".scrollDownBox").on("click",function(){
		$("#fullpage").animate({"top": "-100%"}, 1000, "swing");
		$(".scrollDownBox").removeClass('active');

		$(".pageIndex2").addClass("on");
		if($(".pageIndex2").hasClass("on")){
			$(".pageIndex1").removeClass("on");
			$(".pageIndex3").removeClass("on");
			$(".pageIndex4").removeClass("on");
			$(".pageIndex5").removeClass("on");
			$(".pageIndex6").removeClass("on");
			$(".pageIndex7").removeClass("on");
			$(".pageIndex8").removeClass("on");
		}
	})

}
// ---------------------------메인페이지 첫번째 섹션에서 두번째 섹션으로 스크롤 다운 버튼---------------------------






function main_slide(){
    
    $('.main_slide').slick({
        speed : 1200,
        slidesToShow: 3, // html에서 이것보다 무조건 하나 많아야함!
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnSelect: true,
		dotsClass:'custom_dots',
		responsive: [
            {  
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
					// arrows: true
                } 
            }
        ]
    });
}
// ---------------------------메인페이지 BLOG 슬라이드---------------------------





function main_dotdotdot(){
	$('.dotdot').dotdotdot({
        // configuration goes here
        ellipsis: '...',//말줄임 뭘로 할지
        watch : false, //윈도우 창에따라서 업데이트 할건지, 윈도우가 리사이즈될 때 업데이트할 건지
        wrap : 'letter',//word(단어단위), letter(글 단위), children(자식단위) 자르기
        height  : 43,
        tolerance : 20 //글이 넘치면 얼만큼 height 늘릴건지
    });
}
// ------------------------메인페이지 BLOG 슬라이드 말줄임---------------------------




// -------------------------------풀페이지-----------------------------------

function fullset(){
    var pageindex = $("#fullpage > .fullsection").size(); 
    for(var i=1; i<=pageindex; i++){
        var li = "<li class=pageIndex" + i + "></li>";
        $("#fullpage > .quick > ul").append(li);
    }
    $("#fullpage .quick ul :first-child").addClass("on"); 
    
    // -----------------------------------------------------------------
    // [개선] 0번째 인덱스(첫 페이지)부터 높이 계산이 정확히 되도록 수정된 함수
    // -----------------------------------------------------------------
    function moveToPage(targetIndex, speed) {
        var duration = (speed === undefined) ? 1000 : speed; // 리사이즈 시에는 0초로 즉시 이동하기 위함
        var pagelength = 0;
        
        // targetIndex 직전 페이지들까지의 높이를 누적 합산
        for(var i=0; i<targetIndex; i++) {
            pagelength += $(".full" + (i + 1)).height();
        }
        
        $("#fullpage").stop().animate({"top": -pagelength + "px"}, duration, "swing");
        showTopBtn();
    }

    // [1] PC 마우스 휠 이벤트
    window.addEventListener("mousewheel", function(event){
        var page = $(".quick ul li.on");
        var currentIndex = page.index();
        
        if($("#fullpage").is(":animated")) {
            event.preventDefault();
            return false;
        }
        
        if(event.wheelDelta >= 0) { // 휠 위로
            if(currentIndex > 0){ 
                page.prev().addClass("on").siblings(".on").removeClass("on");
                moveToPage(currentIndex - 1);
            }
        } else { // 휠 아래로    
            var lastPageNum = $(".quick ul li").size(); 
            if(currentIndex < lastPageNum - 1){ 
                page.next().addClass("on").siblings(".on").removeClass("on");
                moveToPage(currentIndex + 1);
            }
        }
    }, { passive: false });

    // [2] 모바일 터치 이벤트 (동작 신뢰도 최적화)
    var touchStartY = 0;
    var touchEndY = 0;

    window.addEventListener("touchstart", function(event) {
        touchStartY = event.touches[0].clientY; 
    }, { passive: true });

    window.addEventListener("touchmove", function(event) {
        // 이동 중이거나 풀페이지 애니메이션 중일 때는 모바일 기본 스크롤 강제 차단
        if($("#fullpage").is(":animated")) {
            event.preventDefault();
        }
    }, { passive: false });

    window.addEventListener("touchend", function(event) {
        touchEndY = event.changedTouches[0].clientY; 
        
        if($("#fullpage").is(":animated")) return false;

        var page = $(".quick ul li.on");
        var currentIndex = page.index();
        var lastPageNum = $(".quick ul li").size();

        var distanceY = touchStartY - touchEndY;

        if (distanceY > 50) { // 아래로 스크롤 (다음 페이지)
            if (currentIndex < lastPageNum - 1) {
                page.next().addClass("on").siblings(".on").removeClass("on");
                moveToPage(currentIndex + 1);
            }
        } else if (distanceY < -50) { // 위로 스크롤 (이전 페이지)
            if (currentIndex > 0) {
                page.prev().addClass("on").siblings(".on").removeClass("on");
                moveToPage(currentIndex - 1);
            }
        }
    }, { passive: true });

    // -----------------------------------------------------------------
    // [3] 모바일 주소창 장난질 방지 + 리사이즈 최적화 대응
    // -----------------------------------------------------------------
    var lastWidth = $(window).width(); // 가로 폭 변화만 감지하기 위한 변수

    $(window).resize(function(){ 
        var currentWidth = $(window).width();
        
        // 모바일 스크롤 시 주소창 때문에 세로 높이만 바뀌는 경우는 리사이즈 반응을 무시합니다.
        // 오직 PC 브라우저 창 크기를 조절하거나, 모바일 화면을 가로로 회전(수평 전환)했을 때만 작동!
        if (currentWidth !== lastWidth) {
            lastWidth = currentWidth; // 너비 값 업데이트
            
            var resizeindex = $(".quick ul li.on").index();
            // 리사이즈 시 딜레이 없이 0초 만에 해당 자리를 잡도록 처리
            moveToPage(resizeindex, 0); 
        }
    });
}
// function fullset(){
//     var pageindex = $("#fullpage > .fullsection").size(); 
//     for(var i=1; i<=pageindex; i++){
//         var li = "<li class=pageIndex" + i + "></li>";
//         $("#fullpage > .quick > ul").append(li);
//     }
//     $("#fullpage .quick ul :first-child").addClass("on"); 
    
//     // 페이지 이동 공통 함수 (휠, 터치, 리사이즈에서 공용으로 사용)
//     function moveToPage(targetIndex) {
//         var pagelength = 0;
//         for(var i=1; i<=targetIndex; i++) {
//             pagelength += $(".full"+i).height();
//         }
//         $("#fullpage").animate({"top": -pagelength + "px"}, 1000, "swing");
//         showTopBtn();
//     }

//     // [1] PC 마우스 휠 이벤트
//     window.addEventListener("mousewheel", function(event){
//         var page = $(".quick ul li.on");
//         var currentIndex = page.index();
        
//         if($("body").find("#fullpage:animated").length >= 1) {
//             event.preventDefault();
//             return false;
//         }
        
//         if(event.wheelDelta >= 0) { // 휠 위로
//             if(currentIndex > 0){ 
//                 page.prev().addClass("on").siblings(".on").removeClass("on");
//                 moveToPage(currentIndex - 1);
//             }
//         } else { // 휠 아래로    
//             var lastPageNum = $(".quick ul li").size(); 
//             if(currentIndex < lastPageNum - 1){ 
//                 page.next().addClass("on").siblings(".on").removeClass("on");
//                 moveToPage(currentIndex + 1);
//             }
//         }
//     }, { passive: false });

//     // -----------------------------------------------------------------
//     // [2] 모바일 터치 이벤트 추가 (이 부분이 없어서 모바일 스크롤이 안 됐던 것입니다!)
//     // -----------------------------------------------------------------
//     var touchStartY = 0;
//     var touchEndY = 0;

//     window.addEventListener("touchstart", function(event) {
//         touchStartY = event.touches[0].clientY; // 터치 시작 지점 Y좌표 저장
//     }, { passive: true });

//     window.addEventListener("touchmove", function(event) {
//         // fullpage 가 굴러가는 중에는 화면이 튀지 않게 모바일 터치 스크롤 기본 동작을 막음
//         if($("body").find("#fullpage:animated").length >= 1) {
//             event.preventDefault();
//         }
//     }, { passive: false });

//     window.addEventListener("touchend", function(event) {
//         touchEndY = event.changedTouches[0].clientY; // 터치 끝난 지점 Y좌표 저장
        
//         if($("body").find("#fullpage:animated").length >= 1) return false;

//         var page = $(".quick ul li.on");
//         var currentIndex = page.index();
//         var lastPageNum = $(".quick ul li").size();

//         // 터치 이동 거리 계산 (최소 50px 이상 쓸었을 때만 작동하게 설정)
//         var distanceY = touchStartY - touchEndY;

//         if (distanceY > 50) { // 🚨 아래로 스크롤 (손가락을 위로 쓸어 올림 -> 다음 페이지)
//             if (currentIndex < lastPageNum - 1) {
//                 page.next().addClass("on").siblings(".on").removeClass("on");
//                 moveToPage(currentIndex + 1);
//             }
//         } else if (distanceY < -50) { // 🚨 위로 스크롤 (손가락을 아래로 쓸어 내림 -> 이전 페이지)
//             if (currentIndex > 0) {
//                 page.prev().addClass("on").siblings(".on").removeClass("on");
//                 moveToPage(currentIndex - 1);
//             }
//         }
//     }, { passive: true });
//     // -----------------------------------------------------------------

//     $(window).resize(function(){ 
//         var resizeindex = $(".quick ul li.on").index();
//         moveToPage(resizeindex);
//     });
// }
// function fullset(){
//     var pageindex = $("#fullpage > .fullsection").size(); // fullpage 안에 섹션이 몇개인지 확인하기
//     for(var i=1; i<=pageindex; i++){
//         var li = "<li class=pageIndex" + i + "></li>";
//         $("#fullpage > .quick > ul").append(li);
//     }
//     $("#fullpage .quick ul :first-child").addClass("on"); // 로드 시 1번째 버튼에 불 들어오게
    
//     // -----------------------------------------------------------------
//     // [수정된 마우스 휠 이벤트] 콘솔 오류 원인을 해결한 코드입니다.
//     // -----------------------------------------------------------------
//     window.addEventListener("mousewheel", function(event){
//         // jQuery 호환성을 위해 이벤트 객체를 래핑합니다.
//         var jQueryEvent = $.Event("mousewheel", { originalEvent: event });
//         var page = $(".quick ul li.on");
        
//         // 애니메이션 중일 때 휠 작동 막기
//         if($("body").find("#fullpage:animated").length >= 1) {
//             event.preventDefault(); // 브라우저 에러 없이 안전하게 스크롤을 방지합니다.
//             return false;
//         }
        
//         // 마우스 휠을 위로
//         if(jQueryEvent.originalEvent.wheelDelta >= 0) {
//             var before = page.index();
//             if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on"); // 퀵버튼 옮기기
//             var pagelength = 0;
//             for(var i=1; i<(before); i++) {
//                 pagelength += $(".full"+i).height();
//             }
//             if(page.index() > 0){ // 첫번째 페이지가 아닐 때
//                 page = page.index()-1;
//                 $("#fullpage").animate({"top": -pagelength + "px"}, 1000, "swing");
//             }
//             showTopBtn();
    
//         } else { // 마우스 휠을 아래로    
//             var nextPage = parseInt(page.index()+1); // 다음 페이지 번호
//             var lastPageNum = parseInt($(".quick ul li").size()); // 마지막 페이지 번호
            
//             if(page.index() <= $(".quick ul li").size()-1){ 
//                 page.next().addClass("on").siblings(".on").removeClass("on");
//             }
            
//             if(nextPage < lastPageNum){ // 마지막 페이지가 아닐 때만 animate
//                 var pagelength = 0;
//                 for(var i = 1; i<(nextPage+1); i++){ 
//                     pagelength += $(".full"+i).height();
//                 }
//                 $("#fullpage").animate({"top": -pagelength + "px"}, 1000, "swing");
//             }
//             showTopBtn();
//         }
//     }, { passive: false }); // 👈 이 옵션 덕분에 preventDefault()를 써도 에러가 나지 않습니다.
//     // -----------------------------------------------------------------

//     $(window).resize(function(){ 
//         var resizeindex = $(".quick ul li.on").index()+1;
//         var pagelength = 0;
//         for(var i = 1; i<resizeindex; i++){ 
//             pagelength += $(".full"+i).height();
//         }
//         $("#fullpage").animate({"top": -pagelength + "px"}, 0);
//     });
// }
// function fullset(){
// 	var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
// 	for(var i=1;i<=pageindex;i++){
// 		var li = "<li class=pageIndex" + i + "></li>"
// 		$("#fullpage > .quick > ul").append(li);
// 	}
// 	$("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	
// 	//마우스 휠 이벤트
// 	$(window).bind("mousewheel", function(event){
// 		var page = $(".quick ul li.on");
// 		//alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
// 		if($("body").find("#fullpage:animated").length >= 1) return false;
// 		//마우스 휠을 위로
// 		if(event.originalEvent.wheelDelta >= 0) {
// 			var before=page.index();
// 			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
// 			var pagelength=0;
// 			for(var i=1; i<(before); i++)
// 			{
// 				pagelength += $(".full"+i).height();
// 			}
// 			if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
// 				page=page.index()-1;
// 				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
// 			}else{
// 				// alert("첫번째 페이지 입니다.");
// 			}	
// 			showTopBtn();
	
// 		}else{ // 마우스 휠을 아래로	
// 			var nextPage=parseInt(page.index()+1); //다음페이지번호
// 			var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
// 			//현재페이지번호 <= (마지막 페이지 번호 - 1)
// 			//이럴때 퀵버튼옮기기
// 			if(page.index() <= $(".quick ul li").size()-1){ 
// 				page.next().addClass("on").siblings(".on").removeClass("on");
// 			}
			
// 			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
// 				var pagelength=0;
// 				for(var i = 1; i<(nextPage+1); i++){ 
// 					//총 페이지 길이 구하기
// 					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
// 					pagelength += $(".full"+i).height();
// 				}
// 				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
// 			}
// 			else{ // 현재 마지막 페이지 일때는
// 				// alert("마지막 페이지 입니다!");
// 			};	
// 			showTopBtn();
	
			
// 		}
// 	});
// 	$(window).resize(function(){ 
// 		//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
// 		var resizeindex = $(".quick ul li.on").index()+1;
		
// 		var pagelength=0;
// 		for(var i = 1; i<resizeindex; i++){ 
// 			//총 페이지 길이 구하기
// 			//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
// 			pagelength += $(".full"+i).height();
// 		}

// 		$("#fullpage").animate({"top": -pagelength + "px"},0);
// 	});
// }
// 사이드 퀵버튼 클릭 이동
function quickClick(){
	$(".quick li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;
		for(var i=1; i<(gnbindex); i++)
		{
			length+=$(".full"+i).height();
		}
		if($("body").find("#fullpage:animated").length >= 1) return false;
		$(this).addClass("on").siblings("li").removeClass("on");
		
		$("#fullpage").animate({"top": -length + "px"},800, "swing");
		
		return false;
		
	});
}

// -------------------------------풀페이지-----------------------------------