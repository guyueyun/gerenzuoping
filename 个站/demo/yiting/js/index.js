

$(document).ready(function(){

    // 滚动部分
         var zixunH = $('.zixun').offset().top
    $(window).scroll(function(event) {
         var winST = $(window).scrollTop()

        if(winST>=zixunH-117){
             $('.header-out').stop().animate({top:0},5000).stop().animate({top:-117},100)
         }else{
             $('.header-out').css({'position':'fixed',"top":0})
         }
    });

    //跳转到咨询部分
    $('.ad-center').click(function(event) {
        $('html,body').stop().animate({scrollTop: zixunH}, 0)
        $('.header-out').css({"top":-117})
    });


    //咨询部分
    $('.user-left .send').click(function(event) {
        var shuru = $('.out-box input').val()
        if(shuru==''){
            alert('请填写您的姓名')
        }else{
            alert('您的加盟咨询表已经发送成功，是否需要向您推荐相关的优质家纺品牌')
        }
    });

    $('.user-right-bd .click-btn').click(function(event) {
        var shuru = $('.user-right-bd input').val()
        if(shuru==''){
            alert('请填写您的电话')
        }else{
            alert('您的加盟咨询表已经发送成功，是否需要向您推荐相关的优质家纺品牌')
        }
    });

// 获取联系电话
    $('.user-right-hd .click-btn').click(function(event) {
        $('.getNumber').show()
       });
    $('.getNumber-up a').click(function(event) {
        $('.getNumber').hide()
    });

        



    // 侧栏广告模块
    
        var bl = false
    $('.ad span').click(function(event) {
        if(bl==true){
            $(this). addClass('close')
            $(this).parent().animate({right:0},600)
            bl=false
        }else{
            $(this).removeClass()
            $(this).parent().animate({right:-126},600)
            bl=true
        }
    });


    // 导航栏js部分
    
    $('.nav li').hover(function() {
      
        $(this).addClass('first').siblings().removeClass('first')
        $(this).children('a').css({color:"#ffff66"})
    }, function() {
        $('.nav li').removeClass('first')
        $('.nav li').children('a').css({color:"#fff"})
        $('.nav li:eq(0)').children('a').css({color:"#ffff66"})
    });


    // banner图切换
    $('.banner-out ol li').click(function(event) {
         var index = $(this).index()
         $(this).addClass('pot1').siblings().removeClass('pot1').css({"cursor":"pointer"})
         $('.banner li').eq(index).fadeOut(1000).siblings().fadeIn(1000)
         num = index
     });
    
    var num = 0
    var timer = null
    function func(){
        num++
        if(num>1){num=0}
        $('.banner li').eq(num).fadeOut(1000).siblings().fadeIn(1000)
        $('.banner-out ol li').eq(num).addClass('pot1').siblings().removeClass('pot1')
    }

    timer = setInterval(func, 5000)

    $(".banner-out").hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer)
        timer = setInterval(func, 5000)
    });




    // 模态窗口
    $('.ad-up3,.ad-up4,.contact-qq').click(function(event) {
        $('.motai').fadeIn()
    });
    $('.motai .close').click(function(event) {
        $('.motai').fadeOut()
    }).hover(function() {
        $('.motai .close a').addClass('closebg')
    }, function() {
        $('.motai .close a').removeClass('closebg')
    });
    $('.motai .a1').hover(function() {
        $('.qq-pic1').addClass('change1')
    }, function() {
        $('.qq-pic1').removeClass('change1')
    });
    $('.motai .a2').hover(function() {
        $('.qq-pic2').addClass('change2')
    }, function() {
        $('.qq-pic2').removeClass('change2')
    });


    // 列表内容左侧滚动部分
    var listMLH = $('.list-main').offset().top
     var listMLW = $('.list-main').offset().left
    var suibian = listMLH-117
    $(window).scroll(function(event) {
    var winST = $(window).scrollTop()
        if(winST>suibian){
            $('.list-main-l').css({'position':'fixed','top':117,'left':listMLW})
        }
        else{
            $('.list-main-l').css({'position':'static'})
        }
    });




});