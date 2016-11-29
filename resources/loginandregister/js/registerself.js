function checkphone(me,value) {
  $.ajax({
    type: 'get',
    url:'/server/checkuser',
    data:{
      'check':'phone',
      'phone':value
    },
    success:function (data,status) {
      if (data['msg']) {
        //out
      }else {
        alert('手机已注册');
        $('#tel')[0].value='';
      }
    }
  });
}
function checkusername(me,value) {
  $.ajax({
    type: 'get',
    url:'/server/checkuser',
    data:{
      'check':'username',
      'username':value
    },
    success:function (data,status) {
      if (data['msg']) {
        //out
      }else {
        alert('用户已注册');
        $('#idname')[0].value='';
      }
    }
  });
}

$('#tel').blur(function () {
  checkphone('phone',$('#tel')[0].value);
});
$('#idname').blur(function () {
  checkusername('username',$('#idname')[0].value);
});
