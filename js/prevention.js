
window.onload=function () {
  var video=document.querySelector('.video');
  var iframe=document.querySelector('.video iframe');
  var changeHeight=function(){
    iframe.style.height=video.offsetWidth*0.562+'px';
  }
  window.onresize=changeHeight;
  changeHeight();

  var Answer=document.querySelector('#Answer');
  var satisfied=document.querySelector('#satisfied');
  var submit=document.querySelector('#submit');
  submit.addEventListener('click',function () {
    if(Answer.value){
      Answer.className='inputtext'
    }else {
      Answer.className='red inputtext'
    }
    if(satisfied.value){
      satisfied.className='inputtext'
    }else {
      satisfied.className='red inputtext'
    }
  })
  Answer.addEventListener('input',function () {
    if(this.value){
      this.className='inputtext'
    }
  })
  satisfied.addEventListener('input',function () {
    if(this.value){
      this.className='inputtext'
    }
  })
}