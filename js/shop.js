window.onload=function () {
  var Img1=document.querySelectorAll('.img1');
  var Img2=document.querySelectorAll('.img2');
  var Img3=document.querySelectorAll('.img3');

  var current=1;
  function check(){
    for (var i=0;i<4;i++){
      Img1[i].style.display= current===1?'block':'none';
      Img2[i].style.display= current===2?'block':'none';
      Img3[i].style.display= current===3?'block':'none';
    }
  }

  function exec() {
    if (current===1){
      current=2;
    }else if (current===2){
      current=3;
    }else if (current===3){
      current=1;
    }
    check()
  }
  setInterval(exec,2500)
}