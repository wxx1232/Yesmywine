$(".check").click(function () {  
      $(".viphidden").show();
	}); 
	
$(function () {
      // 手机
    $("#username").blur(function(){
      var str = $("#username").val();
      var ret = /^1\d{10}$/;
      if(ret.test(str)){
         $('.error1').html('用户名合法');
      }else{
         $('.error1').html('用户名不合法');
      }
    });
    // 密码
    $("#userpass").blur(function(){
      var str = $("#userpass").val();
      var ret = /^[a-zA-Z]\w{5,14}$/;
      if(ret.test(str)){
         $('.error2').html('密码合法');
      }else{
         $('.error2').html('密码不合法');
      }
    });
    // 确认密码
    $("#userpass2").blur(function(){
      var str = $("#userpass2").val();
      var ret = /^[a-zA-Z]\w{5,14}$/;
      if(ret.test(str)){
         $('.error3').html('密码合法');
      }else{
         $('.error3').html('密码不合法');
      }
    });
	
});

//注册用户，并判断用户是否存在
$(function () {
    $("#error").click(function () {
        $.ajax({
           type:"POST",
           url:"php/regsave.php",
           data:{
              "username":$("#username").val(),
              "userpass":$("#userpass").val()
           },
            success:function (t) {
                if(t=="0"){
                    //保存cookie
                    location.href="register.html";
					$("#ceshi").html("该用户名注册成功");
                }else{
                    $("#ceshi").html("注册失败，该用户名已存在");
                }
            }
        });
    });
});
