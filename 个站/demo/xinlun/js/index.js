

$(function(){

   // 集团成员下拉部分
    $('.visual-ul .medium').hover(function() {
      $('.unvisual-ul').show()
    }, function() {
      $('.unvisual-ul').hide()
    });
    


    // nav下拉菜单
     
    $('.nav>.subnav>li').hover(function() {
      var myIndex = 3
      myIndex--
      $(this).css({zIndex:myIndex})
       $(this).children('div').show()
    }, function() {

      $(this).css({zIndex:3})
       $(this).children('div').hide()
    }); 
  
    $('.nav-list1-c').hover(function() {
      $('.nav-list1-c img').css({border:'1px solid blue'})
      $('.nav-list1-c dd').css({color:'#006666'})

    }, function() {
      $('.nav-list1-c img').css({border:'none'})
      $('.nav-list1-c dd').css({color:'#666'})
    });
    $('.nav-list1-r').hover(function() {
      $('.nav-list1-r img').css({border:'1px solid blue'})
      $('.nav-list1-r dd').css({color:'#006666'})

    }, function() {
      $('.nav-list1-r img').css({border:'none'})
      $('.nav-list1-r dd').css({color:'#666'})
    });



})

// banner部分开始
  $(function(){
            var num=0
            var timer=null
            
            
            $(".banner ol li").click(function(event) {
                var index = $(this).index()
                $(this).addClass('current').siblings().removeClass()
                $(".banner ul").stop().animate({left:-100*index+'%'},1000)

                num = index
            });


                // 自动播放模块
            function func(){
                num++
                if(num>4){num=0}
                $(".banner ol li").eq(num).addClass('current').siblings().removeClass()    
                $(".banner ul").stop().animate({left:-100*num+'%'},1000)
              }
              timer =setInterval(func, 5000)

              $(".banner").hover(function() {
                clearInterval(timer)
              }, function() {
                clearInterval(timer)
              timer =setInterval(func, 5000)                
              });
       

    })