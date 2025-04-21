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

// ---------- Per aprire il pop-up work in progress ----------
function workInProgress() {
    const pop = document.getElementById("pop");
    pop.classList.toggle("d-none");
    toggleBlackBlock();
}

// ---------- Per bottone switch ----------
function toggleAble(id) {
    const ableElement = document.getElementById(`able${id}`);
    const disableElement = document.getElementById(`disable${id}`);
    const switchButton = document.getElementById(`switch${id}`);

    if (ableElement && disableElement && switchButton) {
        ableElement.classList.toggle("hide");
        disableElement.classList.toggle("hide");

        if (disableElement.classList.contains("hide")) {
            switchButton.style.backgroundColor = "#F78712";
        } else {
            switchButton.style.backgroundColor = "#8FA693";
        }
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
const now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();

        function formatTime(value) {
            if (value < 10) {
                return "0" + value;
            } else {
                return value;
            }
        }

        hour = formatTime(hour);
        minute = formatTime(minute);
//const time = now.toLocaleTimeString('en-US', HH_MM).replace(/AM|PM/,'');

document.getElementById("time").innerHTML = String(hour) + ":" + String(minute);

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
