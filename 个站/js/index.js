
$(document).ready(function() {
    $('#fullpage').fullpage({

        afterLoad : function(anchorLink ,index ){
            // 从1开始     
            // $('title').html(index)
            $('.section').eq(index-1).addClass('out').siblings().removeClass('out')
        },

        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'right',
    });

    var colors = ['#4482cb', '#0f2c99', '#040b5a','#7419da', '#d1459f']
    $('.section').each(function(index, el) {
        $(el).css({backgroundColor:colors[index]})
    });


// page2
    $('.page2 li').hover(function() {
        $(this).children().stop().animate({height:220,'line-height':220}, 500)
    }, function() {
        $(this).children().stop().animate({'height':40,'line-height':40}, 500)
    });

// page3
    var num = 0;
    var timer = null;

    function func(){            // 抽离出指令
        num++
        if(num>3){ num=0 }      // 虚拟索引值

        $('.page3 .phone ul').stop().animate({ left: num * (-224) }, 500)
    }

    timer = setInterval(func, 3000 ) 







// page5联系部分
    $('.page5 .phone-item div').hover(function() {
        $(this).css({transform:'rotate(0deg)'})
        $(this).children('span').css({transform:'rotate(65deg)'})
    }, function() {
        $(this).css({transform:'rotate(-25deg)'})
        $(this).children('span').css({transform:'rotate(0deg)'})
    });
});


$(function(){
        var num = 0;
        var timer = null; 

        function autoplay(){        // 把我们的定时器里面的指令抽离了出来
            // num = num - 2
            num-=1
            //  $('title').html(num)    测试看的数据
            if( num <= -450){ num=0 }
            $('.description ul').css({ top: num })
        }


        timer = setInterval(autoplay,50)            // 变量空间内部启动定时器
        // 鼠标移上，定时器停止，图片排他高亮显示，
        // 鼠标移开，定时器继续，全部图片变回不透明
        $('.description li').hover(function() {
            clearInterval(timer)
        }, function() { 
            clearInterval(timer)                    
            timer = setInterval(autoplay,50)        // 变量空间内部启动定时器
        });
})
