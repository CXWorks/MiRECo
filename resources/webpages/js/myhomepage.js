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
    $myfollow.css('color','#fff');
    $myarticle.css('display','none');
    $myrelationship.css('display','none');
    $myfanspeople.css('display','none');
    $myfollowpeople.fadeIn();
  });
  $myfans.on('click',function(){
    $myfans.css('background-color','#fa8072');
    $myfans.css('color','#fff');
    $myarticle.css('display','none');
    $myrelationship.css('display','none');
    $myfollowpeople.css('display','none');
    $myfanspeople.fadeIn();
  });
  $myteam.on('click',function(){
    $myteam.css('background-color','#fa8072');
    $myteam.css('color','#fff');
    $myarticle.css('display','none');
    $myfanspeople.css('display','none');
    $myfollowpeople.css('display','none');
    $myrelationship.fadeIn();
  });
}
