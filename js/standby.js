// ---------- Collegamento con la Home  ----------
document.querySelectorAll(".touch").forEach(function (element) {
    element.addEventListener("click", function () {
        window.location.href = "/index-home.html";
    });
});



// ---------- SOS ----------
const sos = document.getElementById("sos");
function showSos() {
    sos.classList.toggle("d-none");
}