window.onload=function () {
  var P1=document.querySelector('.banner .p1');
  var P2=document.querySelector('.banner .p2');
  var P3=document.querySelector('.banner .p3');
  var Img1=document.querySelector('.banner .img1');
  var Img2=document.querySelector('.banner .img2');
  var Img3=document.querySelector('.banner .img3');
  function check(P,I){
    P1.className='p1';
    P2.className='p2';
    P3.className='p3';
    P.className +=' select';
    Img1.style.display='none';
    Img2.style.display='none';
    Img3.style.display='none';
    I.style.display='block';
  }

  var current=1;
  function exec() {
    if (current===1){
      current=2;
      check(P2,Img2)
    }else if (current===2){
      current=3;
      check(P3,Img3)
    }else if (current===3){
      current=1;
      check(P1,Img1)
    }
  }
  var Timer=setInterval(exec,2500)

  P1.addEventListener('click',function () {
    check(P1,Img1);
    clearInterval(Timer);
    current=1;
    Timer=setInterval(exec,2500);
  })
  P2.addEventListener('click',function () {
    check(P2,Img2);
    clearInterval(Timer);
    current=2;
    Timer=setInterval(exec,2500);
  })
  P3.addEventListener('click',function () {
    check(P3,Img3);
    clearInterval(Timer);
    current=3;
    Timer=setInterval(exec,2500);
  })
}