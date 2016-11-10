$(window).on('load',function(){
  whchange();
  //logoanimate();
  pagescroll();
})
//页面分辨率变化时的盒子宽高变化
function whchange(){
  if($(window).width() > 600) {
    var $thbx = $('.thbx');
    var bxw;
    if($(window).width() <768){
      bxw = $(window).width()/2;
    }else {
      bxw = $(window).width()/3;
    }
    var bxh = bxw*0.9;
    $thbx.css('height',bxh);
    }
    setTimeout(whchange,1);
}

//页面滚动背景色渐变特效
function pagescroll(){

}
