$(".check").click(function () {  
      $(".viphidden").show();
	}); 
	
window.onload=function(){
var str="";
		for(var i=0;i<4;i++){
			var a=parseInt(Math.random()*10)
			str+=a;
		}
		document.getElementById("verify_num").innerHTML=str;
	}
	//点击获取4位验证码
	document.getElementById("verify_num").onclick=function(){
		var str="";
		for(var i=0;i<4;i++){
			var a=parseInt(Math.random()*10);
			str+=a;
		}
		document.getElementById("verify_num").innerHTML=str;
	}