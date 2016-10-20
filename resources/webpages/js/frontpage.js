$(window).on("load",function(){
  scrolltop();
});

function scrolltop(){
  var $scrollli = $('.scrolltag li'),
      $scrollcard = $('.topscroll a');
  //点击下方横条显示对应滚动图
  window.onload = $scrollcard.eq(0).fadeIn();
  window.onload = $scrollli.eq(0).css('background-color','#f43e4b');
  $scrollli.on('click',function(e){
    $scrollcard.each(function(index,element){
      $(this).fadeOut();
    });
    $scrollcard.eq($scrollli.index($(this))).fadeIn();
    $scrollli.css('background-color','#fff');
    $(this).css('background-color','#f43e4b');
  });
  var i = 0;
  scroll = setInterval(function(){
    j=i+1;
    if(j>3){j=0}
    $scrollcard.eq(j).fadeIn();
    $scrollli.eq(j).css('background-color','#f43e4b');
    $scrollcard.eq(i).fadeOut();
    $scrollli.eq(i).css('background-color','#fff');
    i=i+1;
    if(i>3){i=0}
  },4000);
}
