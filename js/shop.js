window.onload=function () {
  var Img1=document.querySelectorAll('.img1');
  var Img2=document.querySelectorAll('.img2');
  var Img3=document.querySelectorAll('.img3');

  var current=1;
  function check(){
    for (var i=0;i<4;i++){
      if (current===1){
        Img1[i].className='img1 op0 hid';
        Img2[i].className='img2 op1 show';
        Img3[i].className='img3 op0';
      } else if (current===2){
        Img1[i].className='img1 op0';
        Img2[i].className='img2 op0 hid';
        Img3[i].className='img3 op1 show';
      } else if (current===3){
        Img1[i].className='img1 op1 show';
        Img2[i].className='img2 op0';
        Img3[i].className='img3 op0 hid';
      }
    }
  }

  function exec() {
    check()
    if (current===1){
      current=2;
    }else if (current===2){
      current=3;
    }else if (current===3){
      current=1;
    }
  }
  setInterval(exec,2500)
}