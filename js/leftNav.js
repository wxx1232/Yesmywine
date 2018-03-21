 // 菜单滑过时的效果
    $(function(){
        $('.section dl dt').each(function(v){
            $(this).mouseenter(function(){
                $('dl dd').eq(v).css({'display':'block'});
            });
            $(this).mouseleave(function(){
                $('dl dd').eq(v).css({'display':'none'}).mouseenter(function(){
                $('dl dd').eq(v).css({'display':'block'});
                });
            });
        });
    });
    
$('.section dl dd').each(function(v){
    $(this).mouseleave(function(){
        $('dl dd').eq(v).css({'display':'none'});
    });
});
