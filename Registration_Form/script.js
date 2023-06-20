var sign_in = document.querySelector(".sign-in-link");
var log_in = document.querySelector(".log-in-link");
var sign_in_button = document.querySelector("sign-in-button");
var log_in_button = document.querySelector("log-in-button");

sign_in.addEventListener("focus", color1);

function color1 () {
    sign_in_button.style.borderColor = "rgb(167, 167, 167)";
}

log_in.addEventListener("focus", color2);

function color2 () {
    log_in_button.style.borderColor = "rgb(167, 167, 167)";
}