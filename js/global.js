
function errorMessage(error, message = "Error") {
    return `<div class="error" id="error"${error}">${message}</div>`;
}

function checkForUndefined(property){
    if(!property){
        return true;
 }
}

// checked burger menu function

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const burgerContainer = document.querySelector(".burger-menu-container");
const hamburgerMenu = document.querySelector("#hamburger-menu");


function burgerMenu(){

    bar1.classList.toggle("checked-bar1");
    bar3.classList.toggle("checked-bar3");
    bar2.classList.toggle("checked-bar2");

    burgerContainer.classList.toggle("burger-menu-container");
    burgerContainer.classList.toggle("burger-checked");
}

hamburgerMenu.addEventListener("click", burgerMenu);
hamburgerMenu.addEventListener("keyup", burgerMenu);
hamburgerMenu.addEventListener("touchend", burgerMenu);
