var str="商品名称、订单号、商品编号";
$("input[name='sm']").attr('style','color:#cccccc;');  
$("input[name='sm']").val(str);  
$("input[name='sm']").focus(function(){  
   var v=this.value;  
   if(v == str){  
        $("input[name='sm']").attr('style','color:;');  
        $("input[name='sm']").attr('style','border: 1px solid #9d5691;');
        $("input[name='sm']").attr('style','background:#fff;');
        $(this).val("").attr('name','sm');  
    }  
}).blur(function(){  
    var v=this.value;  
    if(v == ""){  
        $("input[name='sm']").attr('style','color:#cccccc;');  
        $(this).val(str).attr('name','sm');       
    }  
}); 

//商品滑过效果
$(".colr1 a").mouseover(function () {  
  $(".colr1 a").css({ textDecoration: "underline" });
});
$(".colr1 a").mouseout(function () {  
  $(".colr1 a").css({ textDecoration: "none"});
});
$(".colr2 a").mouseover(function () {  
  $(".colr2 a").css({ textDecoration: "underline" });
});
$(".colr2 a").mouseout(function () {  
  $(".colr2 a").css({ textDecoration: "none"});
});
$(".list1").mouseover(function () {  
 $(".list1").css({ background: "#f7f7f7" });
});
$(".list1").mouseout(function () {  
 $(".list1").css({ background: "" });
});
$(".list2").mouseover(function () {  
 $(".list2").css({ background: "#f7f7f7" });
});
$(".list2").mouseout(function () {  
 $(".list2").css({ background: "" });
});