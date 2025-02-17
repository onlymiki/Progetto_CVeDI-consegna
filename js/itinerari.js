// ---------- Navbar ----------
fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        const container = document.getElementById('component');
        container.innerHTML = html;

        const icon3 = document.getElementById('icon_3');
        const link3 = document.getElementById('link3');
        if (icon3 && link3) {
            icon3.src = "/img/icon/icon_home/icona_info_dettagliate1.svg";
            link3.href = "/2_info.html";
            icon3.classList.add("p-1");
            icon3.classList.remove("pt-2" ,"pb-3");
        }

        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
            script.remove();
        });
    })
    .catch(error => console.error('Errore nel caricamento del componente:', error));

// ---------- Bottoni arancioni ----------
function toggleOrange(id) {
    const button = document.getElementById(`orange${id}`);
    button.classList.toggle("btn-orange-click");
}

// ---------- Sezione Da A ----------
document.addEventListener("DOMContentLoaded", function () {
    const from = document.getElementById("from");
    const to = document.getElementById("to");
    const search = document.getElementById("search");
    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");

    const elements = [
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Porto 4", "James Cook", "Porto 2",
        "Cristoforo Colombo", "Ziggurat di Ur"
    ];

    search.disabled = true;

    function validateInputs() {
        const fromValue = from.value.trim();
        const toValue = to.value.trim();
        const fromValid = elements.includes(fromValue);
        const toValid = elements.includes(toValue);


        search.disabled = !(fromValid && toValid);

        error1.classList.toggle("visibility", fromValid);
        error2.classList.toggle("visibility", toValid);
    }

    function error() {
        validateInputs();
    }

    function getFormattedTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        // Aggiungi uno zero se le ore o i minuti sono un numero singolo
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        return `${hours}:${minutes}`;
    }


    search.addEventListener("click", function () {
        const card1 = document.getElementById("c1");
        const card2 = document.getElementById("c2");
        const card3 = document.getElementById("c3");
        const card4 = document.getElementById("c4");

        // Quando clicchi cerca vengono cliccati tutti i bottoni arancioni
        const orange1 = document.getElementById("orange1");
        const orange2 = document.getElementById("orange2");
        const orange3 = document.getElementById("orange3");
        const orange4 = document.getElementById("orange4");
        
        card1.classList.toggle("hide");
        card2.classList.toggle("hide");
        card3.classList.toggle("hide");
        card4.classList.toggle("hide");

        // Immagini mappa
        const images = [
            "img/map/map1.svg",
            "img/map/map2.svg",
            "img/map/map3.svg",
            "img/map/map4.svg"
        ]

        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imageContainer = document.getElementById("image-container");

        if (!search.disabled) {
            const fromValue = from.value.trim();
            const toValue = to.value.trim();

            const currentDate = new Date();
            const currentTime = getFormattedTime(currentDate);

            // + 2 ore e 2 minuti
            currentDate.setHours(currentDate.getHours() + 2);
            currentDate.setMinutes(currentDate.getMinutes() + 2);
            const futureTime = getFormattedTime(currentDate);

            // -- Card 2 --
            const currentDate2 = new Date();
            currentDate2.setHours(currentDate2.getHours() + 1);
            const currentTime2 = getFormattedTime(currentDate2);

            // 1 ora
            currentDate2.setHours(currentDate2.getHours() + 2);
            currentDate2.setMinutes(currentDate2.getMinutes() + 2);
            const futureTime2 = getFormattedTime(currentDate2);

            // -- Card 3 --
            const currentDate3 = new Date();
            currentDate3.setHours(currentDate3.getHours() + 2);
            const currentTime3 = getFormattedTime(currentDate3);

            // 1 ora
            currentDate3.setHours(currentDate3.getHours() + 2);
            currentDate3.setMinutes(currentDate3.getMinutes() + 2);
            const futureTime3 = getFormattedTime(currentDate3);

            // -- Card 4 --
            const currentDate4 = new Date();
            currentDate4.setHours(currentDate4.getHours() + 3);
            const currentTime4 = getFormattedTime(currentDate4);

            // 1 ora
            currentDate4.setHours(currentDate4.getHours() + 2);
            currentDate4.setMinutes(currentDate4.getMinutes() + 2);
            const futureTime4 = getFormattedTime(currentDate4);


            card1.querySelector(".from").textContent = fromValue;
            card1.querySelector(".to").textContent = toValue;

            card1.querySelector(".current-time").textContent = currentTime;
            card1.querySelector(".future-time").textContent = futureTime;

            card2.querySelector(".from").textContent = fromValue;
            card2.querySelector(".to").textContent = toValue;

            card2.querySelector(".current-time").textContent = currentTime2;
            card2.querySelector(".future-time").textContent = futureTime2;

            card3.querySelector(".from").textContent = fromValue;
            card3.querySelector(".to").textContent = toValue;

            card3.querySelector(".current-time").textContent = currentTime3;
            card3.querySelector(".future-time").textContent = futureTime3;

            card4.querySelector(".from").textContent = fromValue;
            card4.querySelector(".to").textContent = toValue;

            card4.querySelector(".current-time").textContent = currentTime4;
            card4.querySelector(".future-time").textContent = futureTime4;

            imageContainer.src = randomImage;
        }
    });

    from.addEventListener("input", validateInputs);
    to.addEventListener("input", validateInputs);
    search.addEventListener("click", error);
});


document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    search.disabled = false;

    //Recupera i valori da localStorage
    const fromValue = localStorage.getItem("fromValue");
    const toValue = localStorage.getItem("toValue");

    // Inserisce i valori negli input se esistono
    if (fromValue) {
        document.getElementById("from").value = fromValue;
    }
    if (toValue) {
        document.getElementById("to").value = toValue;
    }
});
