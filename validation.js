const userPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_]).{7,15}$/;

function validateUserName(userName) {
    return userPattern.test(userName);
}

function validatePassword(password) {
    return passwordPattern.test(password);
}

function onBlurUserName() {
    const userInput = document.getElementById("UserName");

    if (!validateUserName(userInput.value)) {
        window.alert("Invalid user name");
        userInput.value = "";
    }
}

function onBlurPassword() {
    const passwordInput = document.getElementById("Password");

    if (!validatePassword(passwordInput.value)) {
        window.alert("Password does not match criteria");
        passwordInput.value = "";
    }
}

function onSubmitForm() {
    const userInput = document.getElementById("UserName");
    const passwordInput = document.getElementById("Password");

    const isUserNameValid = validateUserName(userInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    if (!isUserNameValid || !isPasswordValid) {
        return false;
    }

    return true;
}
