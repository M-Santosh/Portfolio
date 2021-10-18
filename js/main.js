/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function validate(){
let nam = document.getElementById('get_name').value;
let mail = document.getElementById('get_mail').value;
let cmt = document.getElementById('get_comment').value;
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

if(nam.length<1){
        console.log('user_name_Not_Entered');
        return false;
}
if(mail.length<10){
    console.log("Email_Not_Entered");
    return false;
}
if(cmt<6){
    console.log("Comment_Not_Entered");
    return false;
}
alert("Submitted successful!");

return true;
}
