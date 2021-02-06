const navBar = document.querySelector('.ul');
const openBtn = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function(){
    navBar.classList.add("show-nav");
    closeBtn.classList.add("show-close");
});

closeBtn.addEventListener('click', function(){
    navBar.classList.remove("show-nav");
    closeBtn.classList.remove("show-close");
});