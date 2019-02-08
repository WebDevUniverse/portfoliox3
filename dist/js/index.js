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
const loading = document.querySelector(".cube .front");
const cubeBack = document.querySelector(".cube .back");
const cubeLeft = document.querySelector(".cube .left");
const cubeRight = document.querySelector(".cube .right");
const cubeTop = document.querySelector(".cube .top");
const cubeBottom = document.querySelector(".cube .bottom");


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

// ---------------------------- 3D cube text changing scirpt
const progs = ['Html5 <br> <em>90%</em>', 'Css3 <br> <em>95%</em>', "J.S <br> <em>39%</em>", "Sass <br> <em>92%</em>", "Node.Js <br> <em>44%</em>", "Github <br> <em>75%</em>", "Jquery <br> <em>50%</em>", "Php <br> 17%"];
var mytimer = setInterval(loadd, 1500);

pi = 0;
function loadd (){
    if(pi == progs.length){
        // clearInterval(mytimer);
        // loading.innerHTML = "End Arrey";
        loading.innerHTML = `<span style="font-weight: bold; font-style: italic"> ${pi} </span>`;
        cubeBack.style.display = 'flex';
        pi = -1;
    }
    else{
        pi++;
        loading.innerHTML = `<span> ${progs[pi]} </span>`;
        cubeBack.innerHTML = `<span> ${progs[pi]} </span>`;
        cubeLeft.innerHTML = `<span> ${progs[pi]} </span>`;
        cubeRight.innerHTML = `<span> ${progs[pi]} </span>`;
        cubeTop.innerHTML = `<span> ${progs[pi]} </span>`;
        cubeBottom.innerHTML = `<span> ${progs[pi]} </span>`;        
    }
}
// ---------------------------- 3D cube text changing scirpt