
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const contactMessage = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

// Form validation function
function validateForm(event){

    event.preventDefault();

    if(checkLength(fullName.value, 5)){
        nameError.style.display = "none";
    }
    else{
        nameError.style.display = "block";
    }
    if(checkLength(contactMessage.value, 25)){
        messageError.style.display = "none";
    }
    else{
        messageError.style.display = "block";
    }
    if(checkLength(subject.value, 15)){
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
    }
    if(emailValidation(email.value)){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

}

// Response for submitted message
function mainHtml(){
    
    const mainContent = document.querySelector("main"); 

    if(checkLength(fullName.value, 5) && checkLength(contactMessage.value, 25) && checkLength(subject.value, 15) && emailValidation(email.value) === true){
    
        mainContent.innerHTML = 
        `<div id="message-response-text">
            <h1>Thank you for your message!</h1>
            <p>You will normally receive an answer within a few hours.</p>
            <p><span>- Endre</span></p>
            <div class="center-align">
                <a href="posts.html">
                    <button class="cta" type="button">Back to posts</button>
                </a>
            </div>
        </div>`

    }else{
        console.log("Nope!");
    }
}

// form event listener that validates form, and returns new html if validated
form.addEventListener("submit", validateForm);
form.addEventListener("submit", mainHtml);


// Function for checking/validating length of input value
function checkLength(value, length){

    if(value.trim().length > length){
        return true;
    }
    else{
        return false;
    }

}

// function for validating email
function emailValidation(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

