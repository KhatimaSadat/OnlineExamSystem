// for navigation bar and side bar javascript code
const humbarger = document.getElementsByClassName("humbarger")[0];
const list = document.getElementById('right');

const profile = document.getElementsByClassName("profile")[0];
const aside = document.getElementById('left2');
humbarger.addEventListener('click' , ()=>{
    list.classList.toggle('active');
    aside.classList.toggle('active');
    
})

profile.addEventListener('click', ()=>{
    alert("clicked");
//    aside.classList.toggle('active');
})

