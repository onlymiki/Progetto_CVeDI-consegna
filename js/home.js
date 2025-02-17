/* ---------- Click bottone "footer" ----------
const orange1 = document.getElementById("orange1");
const access = document.getElementById("access");
const orange3 = document.getElementById("orange3");

function changeColor(element) {
    element.classList.toggle("btn-round-bottom-click");
}

orange1.addEventListener("click", function () {
    changeColor(orange1);
});

access.addEventListener("click", function () {
    changeColor(access);
});

orange3.addEventListener("click", function () {
    changeColor(orange3);
});*/

// ---------- Per aprire tendina accessibilità ----------
function toggleDisplay() {
    const accessibilitySection = document.getElementById("accessibility");
    if (accessibilitySection) {
        accessibilitySection.classList.toggle("hide");
    }
}

// ---------- Per bottone switch ----------
function toggleAble(id) {
    const ableElement = document.getElementById(`able${id}`);
    const disableElement = document.getElementById(`disable${id}`);

    if (ableElement && disableElement) {
        ableElement.classList.toggle("hide");
        disableElement.classList.toggle("hide");
    }
}

// ---------- Per blur ----------
const accessibilitySection = document.getElementById("access");
const blackBlock = document.getElementById("black-block");

function toggleBlackBlock() {
    blackBlock.classList.toggle("hide");
}

accessibilitySection.addEventListener("click", toggleBlackBlock);

// ---------- Per mostrare l'orario ----------
const now = new Date()
const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

document.getElementById("time").innerHTML = time;

// ---------- Per SOS ----------
const btnSOS = document.getElementById("orange3");
const btnOK = document.getElementById("btn-ok");

btnSOS.addEventListener("click", function () {
    const pop = document.getElementById("sos");
    const blackBlock = document.getElementById("black-block");
    pop.classList.toggle("visibility");
    blackBlock.classList.toggle("hide");
});
btnOK.addEventListener("click", function () {
    const pop = document.getElementById("sos");
    const blackBlock = document.getElementById("black-block");
    pop.classList.toggle("visibility");
    blackBlock.classList.toggle("hide");
});
