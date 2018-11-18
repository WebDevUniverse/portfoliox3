// -------------------------------------------------- Menu DOM

const mainHeader = document.querySelector('.main-header');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItem = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click', function(){
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        // status
        showMenu = true;
    } else {
        mainHeader.style.height = '10rem';
        // mainHeader.style.width = '0px';

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        // status
        showMenu = false;
    }
});



// -------------------------------------------------- Cube 3D
// var loading = document.querySelector(".cube .front");
// var cubeBack = document.querySelector(".cube .back");

// ld = 0;
// var mytimer = setInterval(loadding, 100);

// function loadding(){
//     if(ld == 100){
//         clearInterval(mytimer);
//         loading.innerHTML = "html5";
//         cubeBack.style.display = 'flex';
//     }
//     else{
//         ld++;
//         loading.innerHTML = `<span style="font-weight: bold; font-style: italic"> ${"Typing "}${ld}% </span>`;
//         cubeBack.style.display = 'none';
//     }
// }