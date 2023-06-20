var sign = document.querySelector(".sign");
var sign_in = document.querySelector(".sign-in");

sign.addEventListener("focus", color);

function color () {
    sign_in.style.borderColor = "rgb(167, 167, 167)";
}