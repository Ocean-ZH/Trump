/* 
* @Author: Marte
* @Date:   2016-10-25 09:47:12
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-25 20:29:15
*/

/*$(document).ready(function(){
    
});*/
$(function(){
    var clicknum = 0;
    /*+1*/
    $('.box img').click(function(){
        clicknum++;
        if(clicknum<50){
            $('.box').prepend($('<span class="plus1"><h2>+1</h2></span>'));
            $('.plus1').animate({top:-10,opacity:1},400).delay(0).animate({opacity:0},400,function(){
                    $(this).remove();
            });
            $('.plus1 h2').animate({'font-size':18},400);
        }else if(clicknum>=50){
            $('.yeah').animate({opacity:0},400,function(){
                    $(this).remove();
            });
            $('.box').prepend($('<span class="yeah"><h2>Yeah!!</h2></span>'));
            $('.yeah').animate({top:-10,opacity:1,fontSize:30},400);
            $('.yeah h2').animate({'font-size':18},400);
        }
    });

    /*headchange*/
    $('.box img').click(function(){

        $('.clicknum').html('<h2>'+clicknum+'</h2>');
        if(clicknum>=100){
                $('.clicknum').html('<h2>'+'!'+'</h2>');
        }
        for(a=1;a<4;a++){
            if(clicknum==a*10){
                $(this).closest('.box').find('img').removeClass('current');
                $('img').eq(clicknum/10).addClass('current');
            }
            if(clicknum==40){
                $(this).stop().fadeOut(800).closest('.box').find('img').removeClass('current');
                $( 'img').eq(clicknum/10).addClass('current').hide().stop().fadeIn(800);
                $('h3').delay(1000).animate({opacity:1,fontSize:36},600);
            }
            if(clicknum==50){}
        }
    });
    /*huaji*/
    $('.box').mouseenter(function(event) {
        var emoji = $('<div class="emoji"></div>');
        $('body').append(emoji);
        $('.emoji').hide().show(200);
    }).mouseleave(function(event) {
        $('.emoji').remove();
    }).mousemove(function(event) {
        $('.emoji').css({left:event.pageX+10,top:event.pageY+10});
    });       
});