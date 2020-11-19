window.onload=function () {
  var P1=document.querySelector('.banner .p1');
  var P2=document.querySelector('.banner .p2');
  var P3=document.querySelector('.banner .p3');
  var Img1=document.querySelector('.banner .img1');
  var Img2=document.querySelector('.banner .img2');
  var Img3=document.querySelector('.banner .img3');
  P1.addEventListener('click',function () {
    P1.className='p1 select';
    P2.className='p2';
    P3.className='p3';
    Img1.style.display='block';
    Img2.style.display='none';
    Img3.style.display='none';
  })
  P2.addEventListener('click',function () {
    P1.className='p1';
    P2.className='p2 select';
    P3.className='p3';
    Img1.style.display='none';
    Img2.style.display='block';
    Img3.style.display='none';
  })
  P3.addEventListener('click',function () {
    P1.className='p1';
    P2.className='p2';
    P3.className='p3 select';
    Img1.style.display='none';
    Img2.style.display='none';
    Img3.style.display='block';
  })
}