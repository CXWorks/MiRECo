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
var id = getQueryVariable('user');
$(window).on('load',function(){
  buttonsset();
});
function infoopen(){
  window.open('myinfo.html');
}
function buttonsset(){
  var $selcard = $('.selcard>div'),
      $content = $('.wrap>div'),
      $myarticle = $('.myarticle'),
      $myfollowpeople = $('.myfollowpeople'),
      $myfanspeople = $('.myfanspeople'),
      $myrelationship = $('.myrelationship'),
      $refollowsarticle = $('.refollowsarticle'),
      $author = $('.author');

//选项卡切换效果
  $selcard.on('click',function(){
    $selcard.css({
      'background-color':'#fff',
      'color':'#000'
    });
    $myarticle.css('display','none');
    $(this).css({
      'background-color':'#fa8072',
      'color':'#fff'
    });
    $content.css('display','none');
    $content.eq($(this).index()).fadeIn();
  });
  $refollowsarticle.on('click',function(){
    $selcard.css({'background-color':'#fff','color':'#000'});
    $content.css('display','none');
    $myarticle.fadeIn();
  });
}
