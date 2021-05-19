
function errorMessage(error, message = "Error") {
    return `<div class="error" id="error"${error}">${message}</div>`;
}

function checkForUndefined(property){
    if(!property){
        return true;
 }
}