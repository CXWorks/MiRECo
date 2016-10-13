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
    $telform.slideToggle(100);
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
      $telform.slideUp(100);
    }
  })
  document.onclick = function(e){
    e = e || window.event;
    if(e.stopPropagation){
         e.stopPropagation();
    }else{
         e.cancelBubble=true;
    }
    $telform.slideUp(100);
  }
  //按钮划过特效设置
  var $input01 = $('.input01'),
      $chenumtime = $('#chenum-time'),
      $registerIn = $('.registerIn'),
      $paswd = $('#paswd'),
      $repaswd = $('#repaswd'),
      $relog = $('.relog');
//填写框类型鼠标滑过红色填充阴影
 $input01.on({
   focusin: function(e){$(this).css('border-color','#f43e4b')},
   focusout: function(e){$(this).css('border-color','#ccc')}
});
//按钮鼠标划过按钮变色
$chenumtime.on({
  mouseover: function(e){$(this).css('background-color','#fa8072')},
  mouseout: function(e){$(this).css('background-color','#f43e4b')}
})
$registerIn.on({
  mouseover: function(e){$(this).css({'border-color':'#fa8072','color':'#fa8072'})},
  mouseout: function(e){$(this).css({'border-color':'#f43e4b','color':'#f43e4b'})}
})
//密码确认密码填写框输入type变换以及如果两次输入内容不一致报错

//验证码发送按钮点击开始倒计时设置

//返回登陆按钮设置
$relog.on({
  mouseover: function(e){$(this).css('color','#f43e4b')},
  mouseout: function(e){$(this).css('color','#fa8072')}
})
}
