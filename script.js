const mainMenu =  document.querySelector('.menu-list'); //HTML DOM
const closeMenu = document.querySelector('.closemenu');
const openMenu =  document.querySelector('.openmenu');

 openMenu.addEventListener('click', mostraMenu);
 closeMenu.addEventListener('click', fechaMenu);

 function mostraMenu(){
    mainMenu.style.display="flex";
    mainMenu.style.top="0";
 }

 function fechaMenu(){
    mainMenu.style.top="-100%";
 }