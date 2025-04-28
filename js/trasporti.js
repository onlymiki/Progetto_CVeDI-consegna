// ---------- Cambiare le fermate ----------
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-orange");
    let activeIndex = 0;
    let interval;

    // Lista delle fermate del bus
    const busStops = [
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Biblioteca di Alessandria", "Francoforte 137"
    ];

    const busStopsArrivals = [
        "Francoforte 137", "Biblioteca di Alessandria", "Fungoland", "Foresta arcobaleno",
        "Francoforte 137", "Biblioteca di Alessandria", "Fungoland", "Foresta arcobaleno",
        "Francoforte 137", "Biblioteca di Alessandria", "Fungoland", "Foresta arcobaleno",
        "Francoforte 137", "Biblioteca di Alessandria"
    ];

    const zBus = [
        "Z123", "Z121", "Z111", "Z122",
        "Z123", "Z121", "Z111", "Z122",
        "Z123", "Z121", "Z111", "Z122",
        "Z123", "Z121"
    ];

    const binBus = [
        "1", "3", "4", "11",
        "1", "3", "4", "11",
        "1", "3", "4", "11",
        "1", "3"
    ];

    // Lista delle fermate del treno
    const trainStops = [
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Stazione centrale Z1", "Stazione 3"
    ];

    const trainStopsArrivals = [
        "Stazione 3", "Stazione centrale Z1", "Parco Safari GreenCherry", "Base spaziale",
        "Stazione 3", "Stazione centrale Z1", "Parco Safari GreenCherry", "Base spaziale",
        "Stazione 3", "Stazione centrale Z1", "Parco Safari GreenCherry", "Base spaziale",
        "Stazione 3", "Stazione centrale Z1"
    ];

    const zTrain = [
        "Z124", "Z345", "Z999", "Z765",
        "Z124", "Z345", "Z999", "Z765",
        "Z124", "Z345", "Z999", "Z765",
        "Z124", "Z345"
    ];

    const binTrain = [
        "2", "1", "3", "5",
        "2", "1", "3", "5",
        "2", "1", "3", "5",
        "2", "1"
    ];

    // Lista delle fermate della barca
    const boatStops = [
        "Porto 4", "James Cook", "Porto 2",
        "Porto 4", "James Cook", "Porto 2",
        "Porto 4", "James Cook", "Porto 2",
        "Porto 4", "James Cook", "Porto 2",
        "Porto 4", "James Cook"
    ];

    const boatStopsArrivals = [
        "James Cook", "Porto 2", "Porto 4",
        "James Cook", "Porto 2", "Porto 4",
        "James Cook", "Porto 2", "Porto 4",
        "James Cook", "Porto 2", "Porto 4",
        "James Cook", "Porto 2"
    ];

    const zBoat = [
        "B100", "B566", "B221",
        "B100", "B566", "B221",
        "B100", "B566", "B221",
        "B100", "B566", "B221",
        "B100", "B566"
    ];

    const binBoat = [
        "8", "9", "10",
        "8", "9", "10",
        "8", "9", "10",
        "8", "9", "10",
        "8", "9"
    ];

    // Lista delle fermate dell'aereo
    const planeStops = [
        "Foresta arcobaleno", "Cristoforo Colombo", "Ziggurat di Ur",
        "Foresta arcobaleno", "Cristoforo Colombo", "Ziggurat di Ur",
        "Foresta arcobaleno", "Cristoforo Colombo", "Ziggurat di Ur",
        "Foresta arcobaleno", "Cristoforo Colombo", "Ziggurat di Ur",
        "Foresta arcobaleno", "Cristoforo Colombo"
    ]

    const planeStopsArrivals = [
        "Cristoforo Colombo", "Ziggurat di Ur", "Foresta Arcobaleno",
        "Cristoforo Colombo", "Ziggurat di Ur", "Foresta Arcobaleno",
        "Cristoforo Colombo", "Ziggurat di Ur", "Foresta Arcobaleno",
        "Cristoforo Colombo", "Ziggurat di Ur", "Foresta Arcobaleno",
        "Cristoforo Colombo", "Ziggurat di Ur"
    ];

    const zPlane = [
        "A111", "A386", "A901",
        "A111", "A386", "A901",
        "A111", "A386", "A901",
        "A111", "A386", "A901",
        "A111", "A386"
    ];

    const binPlane = [
        "G1", "G3", "G2",
        "G1", "G3", "G2",
        "G1", "G3", "G2",
        "G1", "G3", "G2",
        "G1", "G3"
    ]

    // Funzione per aggiornare i contenuti delle righe
    function updateStops0() {
        for (let i = 0; i < busStops.length; i++) {
            const stopElement = document.getElementById(`r${i + 1}`);
            if (stopElement) {
                stopElement.textContent = busStops[i];
            }
        }

        for (let i = 0; i < zBus.length; i++) {
            const z = document.getElementById(`z${i + 1}`);
            const w = document.getElementById(`w${i + 1}`);
            if (z && w) {
                z.textContent = zBus[i];
                w.textContent = zBus[i];
            }
        }

        for (let i = 0; i < busStopsArrivals.length; i++) {
            const stopElement = document.getElementById(`a${i + 1}`);
            if (stopElement) {
                stopElement.textContent = busStopsArrivals[i];
            }
        }

        for (let i = 0; i < binBus.length; i++) {
            const b = document.getElementById(`b${i + 1}`);
            const c = document.getElementById(`c${i + 1}`);
            if (b && c) {
                b.textContent = binBus[i];
                c.textContent = binBus[i];
            }
        }
    }

    function updateStops1() {
        for (let i = 0; i < trainStops.length; i++) {
            const stopElement = document.getElementById(`r${i + 1}`);
            if (stopElement) {
                stopElement.textContent = trainStops[i];
            }
        }

        for (let i = 0; i < zTrain.length; i++) {
            const z = document.getElementById(`z${i + 1}`);
            const w = document.getElementById(`w${i + 1}`);
            if (z && w) {
                z.textContent = zTrain[i];
                w.textContent = zTrain[i];
            }
        }

        for (let i = 0; i < trainStopsArrivals.length; i++) {
            const stopElement = document.getElementById(`a${i + 1}`);
            if (stopElement) {
                stopElement.textContent = trainStopsArrivals[i];
            }
        }

        for (let i = 0; i < binTrain.length; i++) {
            const b = document.getElementById(`b${i + 1}`);
            const c = document.getElementById(`c${i + 1}`);
            if (b && c) {
                b.textContent = binTrain[i];
                c.textContent = binTrain[i];
            }
        }
    }

    function updateStops2() {
        for (let i = 0; i < boatStops.length; i++) {
            const stopElement = document.getElementById(`r${i + 1}`);
            if (stopElement) {
                stopElement.textContent = boatStops[i];
            }
        }

        for (let i = 0; i < boatStopsArrivals.length; i++) {
            const stopElement = document.getElementById(`a${i + 1}`);
            if (stopElement) {
                stopElement.textContent = boatStopsArrivals[i];
            }
        }

        for (let i = 0; i < zBoat.length; i++) {
            const z = document.getElementById(`z${i + 1}`);
            const w = document.getElementById(`w${i + 1}`);
            if (z && w) {
                z.textContent = zBoat[i];
                w.textContent = zBoat[i];
            }
        }

        for (let i = 0; i < binBoat.length; i++) {
            const b = document.getElementById(`b${i + 1}`);
            const c = document.getElementById(`c${i + 1}`);
            if (b && c) {
                b.textContent = binBoat[i];
                c.textContent = binBoat[i];
            }
        }
    }

    function updateStops3() {
        for (let i = 0; i < planeStops.length; i++) {
            const stopElement = document.getElementById(`r${i + 1}`);
            if (stopElement) {
                stopElement.textContent = planeStops[i];
            }
        }

        for (let i = 0; i < planeStopsArrivals.length; i++) {
            const stopElement = document.getElementById(`a${i + 1}`);
            if (stopElement) {
                stopElement.textContent = planeStopsArrivals[i];
            }
        }

        for (let i = 0; i < zPlane.length; i++) {
            const z = document.getElementById(`z${i + 1}`);
            const w = document.getElementById(`w${i + 1}`);
            if (z && w) {
                z.textContent = zPlane[i];
                w.textContent = zPlane[i];
            }
        }

        for (let i = 0; i < binPlane.length; i++) {
            const b = document.getElementById(`b${i + 1}`);
            const c = document.getElementById(`c${i + 1}`);
            if (b && c) {
                b.textContent = binPlane[i];
                c.textContent = binPlane[i];
            }
        }
    }

    // Funzione per aggiornare il contenuto della pagina in base al bottone cliccato
    function setActiveButton(index) {
        buttons.forEach(btn => btn.classList.remove("btn-orange-click"));
        buttons[index].classList.add("btn-orange-click");
        activeIndex = index;
        const imgContainer = document.getElementById("img-container");
        const station = document.getElementById("station");

        // Aggiorna il contenuto quando il bus è attivo
        function updateImage() {
            if (index === 0) {
                updateStops0();
                station.innerHTML = "Lampugnano";

                if (window.matchMedia("(max-width: 992px)").matches || window.matchMedia("(min-width: 2551px)").matches) {
                    imgContainer.src = "../img/map/Bus2.png";
                } else {
                    imgContainer.src = "../img/map/Bus.png";
                }
            }
        }

        // Aggiorna il contenuto delle fermate quando train è attivo
        if (index === 1) {
            updateStops1();
            imgContainer.src = "../img/map/Train.png"
            station.innerHTML = "Centrale"

            if ((window.matchMedia("(max-width: 992px)").matches) || (window.matchMedia("(min-width: 2551px)").matches)) {
                imgContainer.src = "../img/map/Train2.png";
            }
        }

        // Aggiorna il contenuto quando la barca è attiva
        if (index === 2) {
            updateStops2();
            imgContainer.src = "../img/map/Boat.png"
            station.innerHTML = "Porto 4"

            if ((window.matchMedia("(min-width: 2551px)").matches)) {
                imgContainer.src = "../img/map/Boat2.png";
            }
        }

        // Aggiorna il contenuto quando l'aereo è attivo
        if (index === 3) {
            updateStops3();
            imgContainer.src = "../img/map/Plane.png"
            station.innerHTML = "Foresta arcobaleno"

            if ((window.matchMedia("(max-width: 992px)").matches) || (window.matchMedia("(min-width: 2551px)").matches)) {
                imgContainer.src = "../img/map/Plane2.png";
            }

        }

        // Chiamata iniziale per impostare l'immagine giusta al caricamento
        updateImage();

        // Aggiunge un listener per aggiornare l'immagine quando la finestra cambia dimensione
        window.addEventListener("resize", updateImage);
    }

    // Funzione per definire l'intervallo di aggiornamento automatico delle pagine (dopo 20 sec)
    function startRotation() {
        interval = setInterval(() => {
            let nextIndex = (activeIndex + 1) % buttons.length;
            setActiveButton(nextIndex);
        }, 20000);
    }

    // Inizializza il primo bottone con la classe
    setActiveButton(0);
    startRotation();

    // Funzione per aggiungere evento click ai bottoni
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            clearInterval(interval); // Ferma la rotazione temporaneamente
            setActiveButton(index);
            startRotation(); // Riavvia la rotazione
        });
    });
});


const bus = document.getElementById("orange1");
const train = document.getElementById("orange2");
const boat = document.getElementById("orange3");
const plane = document.getElementById("orange4");

let trainStops = ["Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCharry",
    "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCharry",
    "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCharry",
    "Stazione centrale Z1", "Stazione 3"];

if (train.classList.contains("btn-orange-click")) {
    for (let i = 0; i < trainStops.length; i++) {
        document.getElementById(`r${i + 1}`).textContent = trainStops[i];
    }
}

function change() {
    const sectionMap = document.getElementById("section-map");
    const img = document.getElementById("img");
    const title = document.getElementById("title");
    const station = document.getElementById("station");
    const imgContainer = document.getElementById("img-container");

    sectionMap.classList.toggle("hide");
    imgContainer.classList.toggle("hide");


    if (!(sectionMap.classList.contains("hide"))) {
        img.src = "/img/icon/icon_trasport/icon_arrow.svg";
        title.innerHTML = "Torna alla mappa";
        station.innerHTML = "Ricerca";
    } else {
        img.src = "/img/icon/icon_trasport/icon_search_2.svg";
        title.innerHTML = "Ricerca itinerario";
        station.innerHTML = "Stazione 3"
    }
}

// Funzione per gestire l'aggiornamento degli orari
function generaOrariConId(oraIniziale, minutiIniziali, numeroElementi) {
    let orariConId = {};
    let ora = oraIniziale;
    let minuti = minutiIniziali;

    for (let i = 0; i < numeroElementi; i++) {
        let orarioFormattato = `${String(ora).padStart(2, '0')}:${String(minuti).padStart(2, '0')}`;
        orariConId[`o${i + 1}`] = orarioFormattato;

        // Calcolare orario p come 1 minuto indietro rispetto a o
        let minutiP = minuti - 1;
        if (minutiP < 0) {
            minutiP = 59;  // Se minuti di p diventano negativi, cambia l'ora
            ora -= 1;  // Subtrai un'ora
        }

        // Formatta l'orario di p
        let orarioPFormattato = `${String(ora).padStart(2, '0')}:${String(minutiP).padStart(2, '0')}`;
        orariConId[`p${i + 1}`] = orarioPFormattato;

        // Incrementa i minuti di 15 per l'elemento successivo
        minuti += 15;

        if (minuti >= 60) {
            minuti -= 60;
            ora += 1;
        }
    }

    return orariConId;
}

// Funzione per allineare l'orario a quello attuale 
function aggiornaOrari() {
    // Ottieni l'orario attuale
    let now = new Date();
    let oraIniziale = now.getHours();
    let minutiIniziali = now.getMinutes();

    // Genera gli orari a partire dall'orario attuale
    let orari = generaOrariConId(oraIniziale, minutiIniziali, 14);

    // Assegna gli orari agli elementi HTML con ID o1, o2, ..., o14 e p1, p2, ..., p14
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`o${i}`).textContent = orari[`o${i}`];
        document.getElementById(`p${i}`).textContent = orari[`p${i}`];
    }
}

// Esegui la funzione iniziale per popolare gli orari quando la pagina viene caricata
aggiornaOrari();

// Usa setInterval per aggiornare gli orari ogni 15 minuti (900000 millisecondi)
setInterval(aggiornaOrari, 900000);



//Per gestire gli errori
document.addEventListener("DOMContentLoaded", function () {
    const from = document.getElementById("from");
    const to = document.getElementById("to");
    const search = document.getElementById("search");
    const search2 = document.getElementById("search2");
    
    const searchStation = document.getElementById("search-station");
    var form1 = false;
    var form2 = false;
});



// ---------- Componente Navbar ----------
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


// ---------- Pop-up lavori in corso ----------
const pop = document.getElementById("pop");
const bgDark = document.getElementById("bg-dark");
search2 = document.getElementById("search2");
okay = document.getElementById("okay")

function undo() {
    pop.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");
}

/*
search2.addEventListener("click", function(){
    pop.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");  
});

okay.addEventListener("click", function(){
    pop.classList.toggle("visibility");
    bgDark.classList.toggle("visibility");  
});
*/

function searchdestination() {
    document.getElementById("start-from").classList.remove("z-3");
    document.getElementById("go-to").classList.remove("z-2");
    if(form1 && form2){
        const fromValue = document.getElementById("from").value;
        const toValue = document.getElementById("to").value;
    
        localStorage.setItem("fromValue", fromValue);
        localStorage.setItem("toValue", toValue);
    
        window.location.href = "/4_itinerari.html";
    }
    if(!form1){
        document.getElementById("not-found1").classList.remove("d-none");
    }
    if(!form2){
        document.getElementById("not-found2").classList.remove("d-none");
        
    }
}




function searchmap(){
    document.getElementById("search-results").innerHTML="";
    var pages = [{card: "Grotte di Aurorite", path:"/2_info/info_dettagliate-grotte.html"},
        {card: "Tartanghina", path:"/2_info/info_dettagliate-tartanghina.html"},
        {card: "Biblioteca di Alessandria", path:"/2_info/info_dettagliate-biblio.html"},
        {card: "Ziggurat di Ur", path:"/2_info/info_dettagliate-ziggurat.html"},
        {card: "Farfalla Ardilume", path:"/2_info/info_dettagliate-farfalla.html"},
        {card: "Edera Luminaria", path:"/2_info/info_dettagliate-edera.html"},
        {card: "Marghiole", path:"/2_info/info_dettagliate-marghiole.html"},
        {card: "Cervo verde", path:"/2_info/info_dettagliate-cervo-verde.html"},
        {card: "Nihil", path:"/2_info/info_dettagliate-nihil.html"}
    ];
    let searchit = document.getElementById("search-item");
    
    let keyword = searchit.value.toLowerCase();
    console.log(keyword);
    
    for (let i=0; i<pages.length; i++) {

            if(keyword.localeCompare(pages[i].card.toLowerCase()) == 0) {                    
                 window.location.href = pages[i].path;
                } 
            }
            console.log("non trovato");
            
            document.getElementById("not-found").classList.remove("d-none");
        }

function findfrom(str){
    form1 = false;
    document.getElementById("not-found1").classList.add("d-none");
    document.getElementById("start-from").classList.add("z-3");
    console.log("chiamata funzione");
    
    
    let container = document.getElementById("search-results1");
    container.innerHTML="";
    const stopslist = [
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Porto 4", "James Cook", "Porto 2",
        "Cristoforo Colombo", "Ziggurat di Ur"
    ];
    
    for (let i=0; i<stopslist.length; i++) {
        if (container.childElementCount < 3) {
            
        if (stopslist[i].toLowerCase().includes(str.toLowerCase())) {
            
            resultstop = document.createElement("div");
            resultstop.classList.add("align-items-center", "d-flex", "search-result",  "rounded-start-pill", "rounded-bottom-pill", "white-text-medium");
            resultstop.addEventListener("click", function(){document.getElementById("from").value = stopslist[i]; document.getElementById("search-results1").innerHTML=""; document.getElementById("from").classList.add("ps-2"); 
                document.getElementById("start-from").classList.remove("z-3"); form1 = true;});
            result = document.createElement("h5");
            result.innerHTML = stopslist[i];
            result.classList.add("mb-0", "ms-4");
            resultstop.appendChild(result);
            document.getElementById("search-results1").appendChild(resultstop);
        }
        if (stopslist[i].toLowerCase() === str.toLowerCase()){
            document.getElementById("search-results1").innerHTML="";
            document.getElementById("start-from").classList.remove("z-3");
            form1 = true;
        }
        }
        
    }
    if (str === ""){
        document.getElementById("search-results1").innerHTML="";
        document.getElementById("start-from").classList.remove("z-3");
    }
}

function findto(str){
    form2 =false;
    document.getElementById("not-found2").classList.add("d-none");
    document.getElementById("go-to").classList.add("z-2");
    console.log("chiamata funzione");
    
    
    
    let container = document.getElementById("search-results2");
    container.innerHTML="";
    const stopslist = [
        "Biblioteca di Alessandria", "Francoforte 137", "Foresta arcobaleno", "Fungoland",
        "Stazione centrale Z1", "Stazione 3", "Base spaziale", "Parco Safari GreenCherry",
        "Porto 4", "James Cook", "Porto 2",
        "Cristoforo Colombo", "Ziggurat di Ur"
    ];
    
    for (let i=0; i<stopslist.length; i++) {
        if (container.childElementCount < 3) {
            
        if (stopslist[i].toLowerCase().includes(str.toLowerCase())) {
            
            resultstop = document.createElement("div");
            resultstop.classList.add("align-items-center", "d-flex", "search-result",  "rounded-start-pill", "rounded-bottom-pill", "white-text-medium");
            resultstop.addEventListener("click", function(){document.getElementById("to").value = stopslist[i]; document.getElementById("search-results2").innerHTML=""; document.getElementById("to").classList.add("ps-2"); document.getElementById("go-to").classList.remove("z-2"); form2 = true;});
            result = document.createElement("h5");
            result.innerHTML = stopslist[i];
            result.classList.add("mb-0", "ms-4");
            resultstop.appendChild(result);
            document.getElementById("search-results2").appendChild(resultstop);
        } 
        if (stopslist[i].toLowerCase() === str.toLowerCase()){
            form2 = true;
            document.getElementById("search-results2").innerHTML="";
            document.getElementById("go-to").classList.remove("z-2");
        }
        
    }
    if (str === ""){
        document.getElementById("search-results2").innerHTML="";
        document.getElementById("go-to").classList.remove("z-2");
    }
}
}