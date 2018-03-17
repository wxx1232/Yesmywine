//top
$(".arrow").mouseenter(function () {  
      $(".hidden-box").show();  
	}); 
	$(".arrow").mouseleave(function () {  
      $(".hidden-box").hide();  
	}); 
	$(".hidden-box").mouseenter(function () {  
      $(".hidden-box").show();  
	});
	$(".hidden-box").mouseleave(function () {  
      $(".hidden-box").hide();  
	}); 

//input默认提示信息设置
var str="输入您要查找的商品名称";
$("input[name='kh']").attr('style','color:#cccccc;');  
$("input[name='kh']").val(str);  
$("input[name='kh']").focus(function(){  
   var v=this.value;  
   if(v == str){  
        $("input[name='kh']").attr('style','color:;');  
        $("input[name='kh']").attr('style','border: 1px solid #9d5691;');
        $("input[name='kh']").attr('style','background:#fff;');
        $(this).val("").attr('name','kh');  
    }  
}).blur(function(){  
    var v=this.value;  
    if(v == ""){  
        $("input[name='kh']").attr('style','color:#cccccc;');  
        $(this).val(str).attr('name','kh');       
    }  
}); 

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

//选项卡插件
(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var aMenuLi = tab.find('.menu li');

		// 获取所有的panel
		var aPanel = tab.find('.panel');

		aMenuLi.mouseover(function () {
			var index = $(this).index();

			// 切换菜单
			aMenuLi.removeClass('active').eq(index).addClass('active');

			// 切换panel
			aPanel.removeClass('active').eq(index).addClass('active');
		});
	};

	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);

$('.one').tab();

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