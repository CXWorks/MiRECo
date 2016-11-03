function getQueryVariable(variable)
{
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
             if(pair[0] == variable){return pair[1];}
     }
     return ;
}
$(window).on('load',function(){
  $('.hisarticle').css({
    'background-color':'#fa8072',
    'color':'#fff'
  });
  foset();
});
//页面选项卡设置
function foset(){
  var $selcard = $('.selcard>div'),
      $content = $('.wrap>div');

  $selcard.on('click',function(){
    $selcard.css({
      'background-color':'#fff',
      'color':'#000'
    });
    $(this).css({
      'background-color':'#fa8072',
      'color':'#fff'
    });
    $content.css('display','none');
    $content.eq($(this).index()).fadeIn();
  });
//关注设置
  var $fobtn = $('.fobtn');
  if(id!=localStorage.phonenum){
    $fobtn.css('display','block');
  }else {
    $fobtn.css('display','none');
  }
  $fobtn.on('click',function(e){
    e = e || window.event;
    if(e.stopPropagation){
         e.stopPropagation();
    }else{
         e.cancelBubble=true;
    }
  });
}
