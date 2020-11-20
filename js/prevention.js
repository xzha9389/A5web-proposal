
window.onload=function () {
  var video=document.querySelector('.video');
  var iframe=document.querySelector('.video iframe');
  var changeHeight=function(){
    iframe.style.height=video.offsetWidth*0.562+'px';
  }
  window.onresize=changeHeight;
  changeHeight()
}