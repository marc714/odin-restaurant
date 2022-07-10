// import { HotModuleReplacementPlugin } from 'webpack';
// above is throwing me tons of errors

import './style.css'
import { homePageButton } from './home';
import { foodMenuButton } from './menu';
import { contactButton } from './contact';

import Logo from './InNOut.png'
//import { runtime } from 'webpack';

const myLogo = new Image();
myLogo.src = Logo;

const startPage = (() => {
    const header = document.createElement('header');
    header.classList.add('logo-container')

    const menu = ["Home", "Food", "Contact"];
    const container = document.querySelector('.container')
    const ul = document.createElement('ul');
    
    container.append(header);
    header.append(myLogo);

    // menu bar
    menu.forEach(element => {    
        const li = document.createElement('li');
        const btn = document.createElement('button');
        li.append(btn);
        btn.textContent = element;

        // li.dataset.menu = element;
        btn.setAttribute('id', element);
        btn.classList.add('menu-button');
        ul.append(li);
        btn.addEventListener('click', loadMenu);    
    })
    ul.classList.add('menu-container');
    container.append(ul);

    // menu content section
    const sections = document.createElement('div');
    sections.classList.add('menu-page-wrapper')
    container.append(sections);

    // start on Home menu on load
    homePageButton();
})();

// button logic
function loadMenu(e){
    let menuItem = e.target.getAttribute('id');
    //console.log("helllooooooo")
    switch (menuItem) {
        case 'Home':
            clear();
            console.log("Home button clicked");
            homePageButton();
            break;
        case 'Food':
            clear();
            console.log("Food button clicked");
            foodMenuButton();
            break;
        case 'Contact':
            clear();
            console.log("Contact button clicked");
            contactButton();
            break;
        default:
            homePageButton();
    }
}

function clear(){
    const main = document.querySelector('.menu-page-wrapper');
    main.innerHTML = "";
}

