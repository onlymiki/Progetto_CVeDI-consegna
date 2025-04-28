// ---------- Navbar ----------
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
.then(response => response.text())
.then(html => {
    const container = document.getElementById("component");
    container.innerHTML = html;

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

// ---------- Per cosi laterali ----------
function orange() {
    const button = document.getElementById("zone");
    const section = document.getElementById("zone-section");

    button.classList.toggle("btn-black-zone-select");
    section.classList.toggle("zone-orange");
}
function hide(){
    document.getElementById("pop").classList.toggle("d-none");
    document.getElementById("bg-dark").classList.toggle("d-none");
}
function workInProgress(){
    document.getElementById("pop").classList.toggle("d-none");
    document.getElementById("bg-dark").classList.toggle("d-none");
}
// ---------- Checkbox ----------
// Controlla se lo stato del checkbox è già memorizzato
window.onload = function () {
    const checkbox = document.getElementById("switch7");
    const isChecked = localStorage.getItem("checkboxState") === "true";
    checkbox.checked = isChecked;
};

// Salva lo stato nel localStorage quando il checkbox viene cambiato e indirizza a Mappa
document.getElementById("switch7").addEventListener("change", function () {
    localStorage.setItem("checkboxState", this.checked);
    window.location.href = "/1_mappa-interattiva.html";
});

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


function find(str){
let notFoundMessage = document.getElementById("not-found");
let check = notFoundMessage.classList.contains("d-none");
if (!check) {notFoundMessage.classList.add("d-none")};


let container = document.getElementById("search-results");
container.innerHTML="";
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

for (let i=0; i<pages.length; i++) {
    if (container.childElementCount < 6) {
       
    if (pages[i].card.toLowerCase().includes(str.toLowerCase())) {
        
        resultAnchor = document.createElement("a");
        resultAnchor.classList.add("align-items-center", "d-flex", "text-decoration-none", "search-result",  "rounded-start-pill", "rounded-bottom-pill", "white-text-medium");
        result = document.createElement("h5");
        result.innerHTML = pages[i].card;
        result.classList.add("mb-0", "ms-4");
        resultAnchor.href = pages[i].path;
        resultAnchor.appendChild(result);
        document.getElementById("search-results").appendChild(resultAnchor);
    } 
    }
    
}
if (str == ""){
    document.getElementById("search-results").innerHTML="";
}
}
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