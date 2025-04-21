// ---------- Navbar ----------
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById("component");
            container.innerHTML = html;
            const icon2 = document.getElementById('icon_2');
            const link2 = document.getElementById('link2');
            if (icon2 && link2) {
                icon2.src = "/img/icon/icon_home/icona_info_dettagliate1.svg";
                link2.href = "/2_info.html";
            }

            const scripts = container.querySelectorAll("script");
            scripts.forEach(script => {
                const newScript = document.createElement("script");
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
                script.remove();
            });
        })
        .catch(error => console.error("Errore nel caricamento del componente:", error));

});
var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
        type: 'loop',
        perPage: 4,
        perMove: 2,
        gap: 40,
        pagination: false,
        arrowPath: "M4.65574 0.836838C3.59068 -0.278946 1.86387 -0.278946 0.7988 0.836838C-0.266267 1.95262 -0.266267 3.76166 0.7988 4.87745L15.234 20L0.7988 35.1225C-0.266267 36.2383 -0.266267 38.0474 0.7988 39.1632C1.86387 40.2789 3.59068 40.2789 4.65574 39.1632L21.0194 22.0203C22.0844 20.9045 22.0844 19.0955 21.0194 17.9797L4.65574 0.836838Z"
    }).mount();
}
// ---------- Per bottone arancione e filtro ----------
orange1 = document.getElementById("orange1")
orange2 = document.getElementById("orange2");
orange3 = document.getElementById("orange3");
orange4 = document.getElementById("orange4");
orange5 = document.getElementById("orange5");
const filter = document.getElementById("filter");

function toggleOrange(id) {
    const button = document.getElementById(`orange${id}`);
    button.classList.toggle("btn-orange-click");

    const isActive = Array.from(document.querySelectorAll(".btn-orange"))
        .some(btn => btn.classList.contains("btn-orange-click"));

    if (isActive) {
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

function clearAllOrangeClicks() {
    const buttons = document.querySelectorAll(".btn-orange.btn-orange-click");
    buttons.forEach(button => {
        button.classList.remove("btn-orange-click");
    });

    filter.style.display = "none";
}

// ---------- Per far apparire il questionario ----------
const discover = document.getElementById("discover");
const test = document.getElementById("test");
const test2 = document.getElementById("test2");
const greenTip = document.getElementById("green-tip");
const bgDark = document.getElementById("bg-dark");
const end = document.getElementById("end");
const uSure = document.getElementById("u-sure");

function showTest() {
    test.classList.toggle("visibility");
    greenTip.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");

    discover.disabled = true;
    orange1.disabled = true;
    orange2.disabled = true;
    orange3.disabled = true;
    orange4.disabled = true;
    orange5.disabled = true;

    if (orange2.classList.contains("btn-orange-click")) {
        orange2.classList.toggle("btn-orange-click");
    }
    if (orange4.classList.contains("btn-orange-click")) {
        orange4.classList.toggle("btn-orange-click");
    }

    filter.style.display = "none";
}

// ---------- Colorare i bottoni del questionario ----------
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".row").forEach(row => {
        const group = row.querySelector(".d-flex.justify-content-center.gap-2");

        if (group) {
            group.addEventListener("click", (event) => {
                if (event.target.classList.contains("btn-number")) {

                    // Rimuove la classe solo dai bottoni della stessa riga
                    group.querySelectorAll(".btn-number").forEach(btn => {
                        btn.classList.remove("btn-number-orange");
                    });

                    // Aggiunge la classe solo al pulsante cliccato
                    event.target.classList.add("btn-number-orange");
                }
            });
        }
    });
});

// ---------- Passaggio da una pagina all'altra - questionario ----------
function changePage() {
    test2.classList.toggle("visibility");
    test.classList.toggle("visibility");
}

// ---------- Questionario finito ----------
bgDark.addEventListener("click", function () {
    if (!end.classList.contains("visibility")) {
        toggleVisibility();
    }

    discover.disabled = false;
    orange1.disabled = false;
    orange2.disabled = false;
    orange3.disabled = false;
    orange4.disabled = false;
    orange5.disabled = false;
});

function endTest() {
    test2.classList.toggle("visibility");
    end.classList.toggle("visibility");

    orange2.classList.toggle("btn-orange-click");
    orange4.classList.toggle("btn-orange-click");

    filter.style.display = "block";

}

function toggleVisibility() {
    end.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");
    greenTip.classList.toggle("visibility");
}

// ---------- Pop-up: sei sicuro di voler uscire? ----------
function areUSure() {
    uSure.classList.toggle("visibility");
}

function exit() {
    uSure.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");
    greenTip.classList.toggle("visibility");

    if (!test.classList.contains("visibility")) {
        test.classList.toggle("visibility");
    }
    if (!test2.classList.contains("visibility")) {
        test2.classList.toggle("visibility");
    }

    document.querySelectorAll(".row").forEach(row => {
        const group = row.querySelector(".d-flex.justify-content-center.gap-2");

        if (group) {
            document.querySelectorAll(".btn-number").forEach(btn => {
                btn.classList.add("btn-number");
                btn.classList.remove("btn-number-orange");
            });
        }
    });

    discover.disabled = false;
    orange1.disabled = false;
    orange2.disabled = false;
    orange3.disabled = false;
    orange4.disabled = false;
    orange5.disabled = false;
}

// ---------- Pop-up Attività ----------
const act1 = document.getElementById("activity-1");
const act2 = document.getElementById("activity-2");
const act3 = document.getElementById("activity-3");
const it1 = document.getElementById("itinerary-1");
const it2 = document.getElementById("itinerary-2");
const it3 = document.getElementById("itinerary-3");
const workInProgress = document.getElementById("pop");
const bgDark2 = document.getElementById("bg-dark2");
const reservation = document.getElementById("reservation");
const imgQR = document.getElementById("img-QR");


function showActivity(number) {

    const n = document.getElementById("name");
    const s = document.getElementById("surname");
    const imgQR = document.getElementById("img-QR");

    bgDark2.classList.toggle("visibility");
    if (number === 1) {
        act1.classList.toggle("visibility");
    } else if (number == 2) {
        act2.classList.toggle("visibility");
    } else if (number == 3) {
        act3.classList.toggle("visibility");
    } else if (number == 4) {
        it1.classList.toggle("visibility");
    } else if (number == 5) {
        it2.classList.toggle("visibility");
    } else if (number == 6) {
        it3.classList.toggle("visibility");
    } else if (number == 7) {
        reservation.classList.toggle("visibility");
        bgDark2.classList.toggle("visibility");

        if (reservation.classList.contains("visibility")) {
            n.value = "";
            s.value = "";
            imgQR.classList.toggle("visibility");
        }

    }
    else {
        workInProgress.classList.toggle("visibility");
    }
}

// ---------- Pop-up Prenotazione ----------
function showQR() {
    const n = document.getElementById("name");
    const s = document.getElementById("surname");

    if ((n.value !== "") && (s.value !== "")) {
        imgQR.classList.toggle("visibility");
    }
    console.log("bottoneCliccato");
}








