//input默认提示信息设置
var str="输入您要查找的商品名称";
$("input[name='kh']").attr('style','color:#cccccc;');  
$("input[name='kh']").val(str);  
$("input[name='kh']").focus(function(){  
   var v=this.value;  
   if(v == str){  
        $("input[name='kh']").attr('style','color:;');  
        $("input[name='kh']").attr('style','border: 1px solid #9d5691;');  
        $(this).val("").attr('name','kh');  
    }  
}).blur(function(){  
    var v=this.value;  
    if(v == ""){  
        $("input[name='kh']").attr('style','color:#cccccc;');  
        $(this).val(str).attr('name','kh');       
    }  
}); 