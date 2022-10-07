const form = document.querySelector(".form");
const success = document.querySelector(".success");
const submit = document.querySelector(".submit");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const password = document.getElementById("password");
const firstNameError = document.querySelector(".error-first-name");
const lastNameError = document.querySelector(".error-last-name");
const emailError = document.querySelector(".error-email");
const passwordError = document.querySelector(".error-password");
const emptyFirstName = document.querySelector(".empty-first-name");
const emptyLastName = document.querySelector(".empty-last-name");
const emptyEmail = document.querySelector(".empty-email");
const wrongEmail = document.querySelector(".wrong-email");
const emptyPassword = document.querySelector(".empty-password");

submit.addEventListener("click", (e) => {
    if(firstName.value) {
        firstNameError.style.display = "none";
        emptyFirstName.style.display = "none";
    } else {
        e.preventDefault();
        firstName.style.outline = "solid 1px hsl(0, 100%, 74%)";
        firstNameError.style.display = "block";
        emptyFirstName.style.display = "block";
    }
    if(lastName.value) {
        lastNameError.style.display = "none";
        emptyLastName.style.display = "none";
    } else {
        e.preventDefault();
        lastName.style.outline = "solid 1px hsl(0, 100%, 74%)";
        lastNameError.style.display = "block";
        emptyLastName.style.display = "block";
    }
    if(emailAddress.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value);
        if(regexMatch) {
            emailError.style.display = "none";
            emptyEmail.style.display = "none";
            wrongEmail.style.display = "none";
        } else {
            emailAddress.style.outline = "solid 1px hsl(0, 100%, 74%)";
            emailError.style.display = "block";
            emptyEmail.style.display = "none";
            wrongEmail.style.display = "block";
        }
    } else {
        e.preventDefault();
        emailAddress.style.outline = "solid 1px hsl(0, 100%, 74%)";
        emailError.style.display = "block";
        emptyEmail.style.display = "block";
        wrongEmail.style.display = "none";
    }
    if(password.value) {
        passwordError.style.display = "none";
        emptyPassword.style.display = "none";
    } else {
        e.preventDefault();
        password.style.outline = "solid 1px hsl(0, 100%, 74%)";
        passwordError.style.display = "block";
        emptyPassword.style.display = "block";
    }
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value);
    if(firstName.value&&lastName.value&&emailAddress.value&&regexMatch&&password.value) {
        e.preventDefault();
        form.style.display = "none";
        success.style.display = "flex";
    }
})