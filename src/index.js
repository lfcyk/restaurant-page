import { createHomePage } from "./home.js"
import { createDishesPage } from "./dishes.js"
import { createAboutUsPage } from "./aboutUs.js"

const divNavBar = document.querySelector("div#navBar");

function clearContent() {
    const content = document.querySelector("div#content");
    content.innerHTML = "";
}

function createNavBar() {
    const navBar = document.createElement("nav");
    navBar.setAttribute('id',"menubar");

    const menuHome = document.createElement("button");
    menuHome.classList.add("menu-item", "menu-home", "active")
    menuHome.textContent = "Home";

    const menuDish = document.createElement("button");
    menuDish.classList.add("menu-item", "menu-dish")
    menuDish.textContent = "Signature Dish";

    const menuAboutUs = document.createElement("button");
    menuAboutUs.classList.add("menu-item", "menu-about-us")
    menuAboutUs.textContent = "About Us"

    navBar.appendChild(menuHome);
    navBar.appendChild(menuDish);
    navBar.appendChild(menuAboutUs);
    divNavBar.appendChild(navBar);

    function clearActiveMenu(){
        menuHome.classList.remove("active");
        menuDish.classList.remove("active");
        menuAboutUs.classList.remove("active");
    }

    menuHome.addEventListener("click", () => {
        clearActiveMenu();
        clearContent();
        createHomePage();
        menuHome.classList.add("active");
    });

    menuDish.addEventListener("click", () => {
        clearActiveMenu();
        clearContent();
        createDishesPage();
        menuDish.classList.add("active");
    });

    menuAboutUs.addEventListener("click", () => {        
        clearActiveMenu();
        clearContent();
        createAboutUsPage();
        menuAboutUs.classList.add("active");
    });
}

function initWeb(){
    createNavBar();
    createHomePage();
}

initWeb();




