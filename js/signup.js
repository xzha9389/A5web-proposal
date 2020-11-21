window.onload=function () {
  var First=document.querySelector('#First');
  var Last=document.querySelector('#Last');
  var Birth=document.querySelector('#Birth');
  var tel=document.querySelector('#tel');
  var email=document.querySelector('#email');
  var City=document.querySelector('#City');
  var Post=document.querySelector('#Post');
  var Address=document.querySelector('#Address');
  var password=document.querySelector('#password');
  var Submit=document.querySelector('#Submit');

  function check(el){
    if(el.value){
      el.className=''
    }else {
      el.className='red'
    }
  }
  function click(){
    if(this.value){
      this.className=''
    }
  }
  Submit.addEventListener('click',function () {
    check(First);
    check(Last);
    check(Birth);
    check(tel);
    check(email);
    check(City);
    check(Post);
    check(Address);
    check(password);
  })
  First.addEventListener('input',click);
  Last.addEventListener('input',click);
  Birth.addEventListener('input',click);
  tel.addEventListener('input',click);
  email.addEventListener('input',click);
  City.addEventListener('input',click);
  Post.addEventListener('input',click);
  Address.addEventListener('input',click);
  password.addEventListener('input',click);
}