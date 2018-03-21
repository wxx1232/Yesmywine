//展开
$(".jian").click(function () {  
      $(".hovS").show(); 
      $(".jian").hide();
      $(".jia").show();
	});
$(".jia").click(function () {  
  $(".hovS").hide(); 
  $(".jian").show();
  $(".jia").hide();
});

//section5
//手风琴效果
$('.box li').mouseover(function () {
			$(this).stop(true).animate({
				width:450
			}).children().css('display', 'block').end().siblings().stop(true).animate({width:186}).children().css('display', 'block');
		});

		$('.box').mouseout(function () {
			$(this).children().animate({width:240}).children().css('display', 'block');
		});
		

//active
$(function(){
    $('.btHidden').each(function(v){
        $(this).mouseenter(function(){
            $('firstD').eq(v).css({'display':'block'});
        });
//      $(this).mouseleave(function(){
//          $('dl dd').eq(v).css({'display':'none'}).mouseenter(function(){
//          $('dl dd').eq(v).css({'display':'block'});
//          });
//      });
    });
});
//
//$('.section dl dd').each(function(v){
//  $(this).mouseleave(function(){
//      $('dl dd').eq(v).css({'display':'none'});
//  });
//});
