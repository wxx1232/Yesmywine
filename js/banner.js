//banner
var arr=["../img/banner01.jpg","../img/banner02.jpg","../img/banner03.jpg","../img/banner04.jpg","../img/banner05.jpg","../img/banner06.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function  initUI() {
    $("#box li:first").css({"backgroundColor":"#d3161b","opacity":"0.9"});
}

function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });

    $("#box").mouseleave(function () {
        autoPlay();
    });

    $("#box #lis").click(function () {
        goImg($("#box li").index(this));
    });
}

//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},3000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},3000);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#d3161b","opacity":"0.9"}).siblings().css({"backgroundColor":"#86685e"});
    },3000);
}

//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},2000);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},2000);
    //2、改变豆豆的颜色；
   $("#box li").eq(ord).css({"backgroundColor":"#d3161b","opacity":"0.9"}).siblings().css({"backgroundColor":"#86685e"});
}


$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});