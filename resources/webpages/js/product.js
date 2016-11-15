$(window).on('load',function(){
  imgchange();
})

function imgchange(){
  var imgw = $('.proimg').width(),
      imgh = imgw*0.5625,
      moreimgw = $('.readbox').width(),
      moreimgh = moreimgw*0.4;

  $('.proimg').css('height',imgh);
  $('.readbox').css('height',moreimgh);
}
