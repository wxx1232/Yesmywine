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
