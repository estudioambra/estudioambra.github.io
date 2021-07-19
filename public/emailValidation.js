function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validationHandler () {
    let email = document.getElementById("emailInput").value;
    emailIsValid(email) ? 
        document.getElementById("submitButton").classList.remove("disabled") 
        :document.getElementById("submitButton").classList.add("disabled");  
}