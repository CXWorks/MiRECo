window.onload=buttonset;
function buttonset(){
  //选项卡选取国家区号特效设置
  var $telnum = $('#telnum'),
      $telform = $('.telchoose'),
      $tellis = $('.telchoose>li'),
      $telbar = $('#telbar'),
      $document = $('document');
  $telnum.on('click',function(e){
    e = e || window.event;
    if(e.stopPropagation){
         e.stopPropagation();
    }else{
         e.cancelBubble=true;
    }
    $telform.css("display","block");
  })
  $tellis.on({
    mouseover: function(e){
      $(this).css({'background-color':"#f43e4b",
                  'color':"#fff"});
    },
    mouseout: function(e){
      $(this).css({'background-color':"#fff",
                  'color':"#868686"});
    },
    click: function(e){
      e = e || window.event;
      if(e.stopPropagation){
           e.stopPropagation();
      }else{
           e.cancelBubble=true;
      }
      $telbar.text($(this).text());
      $telform.css("display","none");
    }
  })
  document.onclick = function(e){
    e = e || window.event;
    if(e.stopPropagation){
         e.stopPropagation();
    }else{
         e.cancelBubble=true;
    }
    $telform.css("display","none");
  }
  //按钮划过特效设置
  var $input01 = $('.input01'),
      $chenumtime = $('#chenum-time'),
      $registerIn = $('.registerIn'),
      $paswd = $('#paswd'),
      $repaswd = $('#repaswd');
//填写框类型鼠标滑过红色填充阴影
 $input01.on({
   focusin: function(e){$(this).css('border-color','#f43e4b')},
   focusout: function(e){$(this).css('border-color','#ccc')}
});
//按钮鼠标划过按钮变色
$chenumtime.on({
  mouseover: function(e){$(this).css('background-color','#cd5555')},
  mouseout: function(e){$(this).css('background-color','#f43e4b')}
})
$registerIn.on({
  mouseover: function(e){$(this).css({'border-color':'#cd5555','color':'#cd5555'})},
  mouseout: function(e){$(this).css({'border-color':'#f43e4b','color':'#f43e4b'})}
})
}
