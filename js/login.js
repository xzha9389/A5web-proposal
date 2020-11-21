window.onload=function () {
  var Email=document.querySelector('#in-Email');
  var Password=document.querySelector('#in-Password');
  var Submit=document.querySelector('#Submit');
  Submit.addEventListener('click',function () {
    if(Email.value){
      Email.className=''
    }else {
      Email.className='red'
    }
    if(Password.value){
      Password.className=''
    }else {
      Password.className='red'
    }
  })
  Email.addEventListener('input',function () {
    if(this.value){
      this.className=''
    }
  })
  Password.addEventListener('input',function () {
    if(this.value){
      this.className=''
    }
  })
}