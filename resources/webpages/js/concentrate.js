function concentrate(source,target) {
  $.ajax({
    type:'post',
    url:'../../server/index.php/concentrate',
    data:{
      'method':'concentrate',
      'sourceUserphone':source,
      'targetUserphone':target
    },
    success:function (data,status) {
      if (data['msg']=='success') {
        alert('关注成功');
      }else {
      }
    }
  });
}

function unconcentrate(source,target) {
  $.ajax({
    type:'post',
    url:'../../server/index.php/concentrate',
    data:{
      'method':'cancelconcentrate',
      'sourceUserphone':source,
      'targetUserphone':target
    },
    success:function (data,status) {
      if (data['msg']=='success') {
        alert('取消关注成功');
      }else {
      }
    }
  });
}

function concentrateList(source) {
  $.ajax({
    type:'get',
    url:'../../server/index.php/concentrate',
    data:{
      'userphone':source
    },
    success:function (data,status) {
      for (var vari in object) {
        tar=vari['target'];
        time=vari['date'];
      }
    }
  });
}
