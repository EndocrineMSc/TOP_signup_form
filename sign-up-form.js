const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("confirm_password");

addEventListener("keyup", () => {
    if (checkMatch()) {
        styleValidInput();
    }
    else {
        styleErrorInput();
    }
});

function checkMatch() {
    return password.value == passwordConfirmation.value;
}

function styleErrorInput() {
    password.setAttribute("error", "error");
    confirm_password.setAttribute("error", "error");
}

function styleValidInput() {
    password.setAttribute("error", "noerror");
    confirm_password.setAttribute("error", "noerror");
}