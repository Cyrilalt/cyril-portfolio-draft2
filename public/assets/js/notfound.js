const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const mobileLinks = document.querySelectorAll('.mobileLink');
const yearDiv = document.getElementById('year');

//hamburger menu
hamburger.addEventListener('click', ()=> {
    body.classList.remove('pop');
    body.classList.toggle('burger');
});


//close hamburger menu on mobile link click
mobileLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    body.classList.remove('burger');
  })
});


//custom year
const year = new Date().getFullYear();

yearDiv.innerHTML = year;
