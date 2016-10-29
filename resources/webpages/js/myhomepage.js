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
function buttonsset(){
  var $myfollow = $('.myfollow'),
      $myfans = $('.myfans'),
      $myteam = $('.myteam'),
      $myarticle = $('.myarticle'),
      $myfollowpeople = $('.myfollowpeople'),
      $myfanspeople = $('.myfanspeople'),
      $myrelationship = $('.myrelationship'),
      $refollowsarticle = $('.refollowsarticle');
//选项卡切换效果
  $myfollow.on('click',function(){
    $myfollow.css('background-color','#fa8072');
    $myfans.css({'background-color':'#fff','color':'#000'});
    $myteam.css({'background-color':'#fff','color':'#000'});
    $myfollow.css('color','#fff');
    $myarticle.css('display','none');
    $myrelationship.css('display','none');
    $myfanspeople.css('display','none');
    $myfollowpeople.fadeIn();
  });
  $myfans.on('click',function(){
    $myfans.css('background-color','#fa8072');
    $myfollow.css({'background-color':'#fff','color':'#000'});
    $myteam.css({'background-color':'#fff','color':'#000'});
    $myfans.css('color','#fff');
    $myarticle.css('display','none');
    $myrelationship.css('display','none');
    $myfollowpeople.css('display','none');
    $myfanspeople.fadeIn();
  });
  $myteam.on('click',function(){
    $myteam.css('background-color','#fa8072');
    $myfans.css({'background-color':'#fff','color':'#000'});
    $myfollow.css({'background-color':'#fff','color':'#000'});
    $myteam.css('color','#fff');
    $myarticle.css('display','none');
    $myfanspeople.css('display','none');
    $myfollowpeople.css('display','none');
    $myrelationship.fadeIn();
  });
  $refollowsarticle.on('click',function(){
    $myteam.css({'background-color':'#fff','color':'#000'});
    $myfans.css({'background-color':'#fff','color':'#000'});
    $myfollow.css({'background-color':'#fff','color':'#000'});
    $myrelationship.css('display','none');
    $myfanspeople.css('display','none');
    $myfollowpeople.css('display','none');
    $myarticle.fadeIn();
  });
//关注按钮点击滑动操作
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
