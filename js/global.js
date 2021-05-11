// dropdown burger menu function

// get rid of checkbox hack?????????????

const burgerMenu = document.querySelector(".fa-bars");
const burgerLabel = document.querySelector("#hamburger-menu");

function dropDownMenu(){      
    
    console.log("hello");
    

    burgerLabel.classList.toggle("#hamburger-menu:checked~nav");

};

burgerMenu.addEventListener("click", dropDownMenu);

burgerMenu.addEventListener("keyup", dropDownMenu);