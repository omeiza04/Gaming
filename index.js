document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const  burger = document.querySelector('.burger');
    const  nav = document.querySelector('.nav-container');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}