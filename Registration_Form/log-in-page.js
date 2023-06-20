var log = document.querySelector(".log");
var log_in = document.querySelector(".log-in");

log.addEventListener("focus", color);

function color () {
    log_in.style.borderColor = "rgb(167, 167, 167)";
}