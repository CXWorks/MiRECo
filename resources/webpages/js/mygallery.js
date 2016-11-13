$(window).on('load',function(){
  whchange();
  logoanimate();
  boxtips();
  //$(window).scroll(pagescroll());
})
//页面分辨率变化时的盒子宽高变化
function whchange(){
  if($(window).width() > 600) {
    var $thbx = $('.thbx');
    var bxw = $thbx.width();
    var bxh = bxw*1.3;
    $thbx.css('height',bxh);
    }
    var $infowrap = $('.infowrap');
    var imgw = $('.imgbx').width(),
        imgh = $('.imgbx').height();
    $infowrap.css({
      'width':imgw,
      'height':imgh,
      'margin-top':-imgh
    });
    setTimeout(whchange,1);
}

//页面滚动特效
/*function pagescroll(){
  var $box = $('.thbx'),
      boxh = $box.height(),
      showh = $(window).height()-$box.offsetTop;

      if(showh>=boxh){
        $box.css('opacity',1);
      }else{
        var per = (Math.floor(showh/boxh)*10)/10;
        $box.css('opacity',"per");
      }
}*/
//整页logo动画
function logoanimate(){
  $('.hostinfo').slideDown(750);
  $('.wrapinfo').fadeIn(2000);
}

//页面盒子tip
function boxtips(){
  var $boxs = $('.thbx');
  var $boxtips = $('.infowrap');
  $boxs.each(function(index,element){
    $(this).on({
      mouseenter:function(e){
        e = e || window.event;
        if(e.stopPropagation){
             e.stopPropagation();
        }else{
             e.cancelBubble=true;
        }
        $boxtips.eq(index).fadeIn();
      }
    })
    $(this).on({
      mouseleave:function(e){
        e = e || window.event;
        if(e.stopPropagation){
             e.stopPropagation();
        }else{
             e.cancelBubble=true;
        }
        $boxtips.eq(index).fadeOut();
      }
    })
  });
}
