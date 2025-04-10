function disableForm() {
    document.getElementById("submit").setAttribute("disabled", "");
    document.getElementById("submit").setAttribute("aria-busy", "true");
    document.getElementById("submit").innerText = "Please wait…";
}

function resetForm() {
    document.getElementById("form").reset();
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("submit").removeAttribute("aria-busy");
    document.getElementById("submit").innerText = "Send";
};

window.addEventListener("pageshow", resetForm);