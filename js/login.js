//input默认提示信息设置
var str="请输入E-mail和手机号";
$("input[name='ph']").attr('style','color:#999999;');  
$("input[name='ph']").val(str);  
$("input[name='ph']").focus(function(){  
   var v=this.value;  
   if(v == str){  
        $("input[name='ph']").attr('style','color:;');  
        $("input[name='ph']").attr('style','border: 1px solid #9d5691;');
        $("input[name='ph']").attr('style','background:#fff;');
        $(this).val("").attr('name','ph');  
    }  
}).blur(function(){  
    var v=this.value;  
    if(v == ""){  
        $("input[name='ph']").attr('style','color:#999999;');  
        $(this).val(str).attr('name','ph');       
    }  
}); 


$(function () {
    $("#btnlogin").click(function () {
        $.ajax({
           type:"POST",
           url:"php/logincheck02.php",
           data:{
              "username":$("#username").val(),
              "userpass":$("#userpass").val()
           },
            success:function (t) {
                if(t=="1"){
                    //保存cookie
                    location.href="index.html";
                }else{
                    $("#error").html("用户名或者密码错误");
                    $("#error").show();
                }
            }
        });
    });
});
