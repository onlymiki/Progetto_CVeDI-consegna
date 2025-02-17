// ---------- Navbar ----------
document.addEventListener("DOMContentLoaded", () => {
    fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        const container = document.getElementById('component');
        container.innerHTML = html;

        const icon1 = document.getElementById('icon_1');
        const link1 = document.getElementById('link1');
        if (icon1 && link1) {
            icon1.src = "/img/icon/icon_home/icona_info_dettagliate1.svg";
            link1.href = "/2_info.html";
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
});

// ---------- Checkbox ----------
// Controlla se lo stato del checkbox è già memorizzato
window.onload = function () {
    const checkbox = document.getElementById("switch6");
    const isChecked = localStorage.getItem("checkboxState") === "true";
    checkbox.checked = isChecked;
};

// Salva lo stato del checkbox nel localStorage e reindirizza a Info luoghi
document.getElementById("switch6").addEventListener("change", function () {
    localStorage.setItem("checkboxState", this.checked);
    window.location.href = "/2_info.html";
});

var platform = new H.service.Platform({
    apikey: 'j7EOzFBpEbCEvUqYvs-k7f9wt0AW7hbLM-Z7oubezzI'
});
var defaultLayers = platform.createDefaultLayers();
//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        center: { lat: 42, lng: 12 },
        zoom: 5,
        pixelRatio: window.devicePixelRatio || 1
    }
);
// This adds a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

addDomMarker(map);

function addDomMarker(map) {

    function selected(evt) {
        unselect();
        evt.target.classList.add("marker-selected");
    }

    function unselect() {
        markers = document.getElementsByClassName("mrk-adjust-pos");
        for (const item of markers) { item.classList.remove("marker-selected"); }
    }

    function hidecards() {
        cardiniz = document.getElementById("cardmappa-iniziale").classList.add("d-none");
        cards = document.getElementsByClassName("card-infoluoghi");
        for (const item of cards) {
            item.classList.remove("card_animation");
        }
    }
    function showSelected(id) {

        hidecards();
        //document.getElementById(id).classList.remove("cardmappa-unselected");
        document.getElementById(id).classList.add("card_animation");
    }
    var CoordArray_labels_path = [{ lat: 33.215787262106, lng: 27.838996725746853, id: "card-map-tarta", path: "/img/markers/mrk_pesce_giallo.svg" },
    { lat: 47.45982460104555, lng: 13.476719700846282, id: "card-map-cervo", path: "/img/markers/mrk_mammL_rosso.svg" },
    { lat: 52.943362788198264, lng: 5.29755273129788, id: "card-map-farfalla", path: "/img/markers/mrk_insetto_azz.svg" },
    { lat: 45.214542133122734, lng: 2.46044857701845, id: "card-map-fungo", path: "/img/markers/mrk_fungo_giallo.svg" },
    { lat: 49.97574912844233, lng: 11.712053003442819, id: "card-map-edera", path: "/img/markers/mrk_pianta_azz.svg" },
    { lat: 43.27501201090305, lng: -2.4383640625336636, id: "card-map-fiore", path: "/img/markers/mrk_fiore_azz.svg" },
    { lat: 31.20927806885938, lng: 29.908827915862485, id: "card-map-biblio", path: "/img/markers/mrk_mon_rosso.svg" },
    { lat: 40.52556105819902, lng: 21.43499804625748, id: "card-map-grotta", path: "/img/markers/mrk_attrNat_viola.svg" },
    { lat: 30.962665833095702, lng: 46.103147139800406, id: "card-map-ziggurat", path: "/img/markers/mrk_mon_azz.svg" }];


    for (let i = 0; i < CoordArray_labels_path.length; i++) {
        //svgArray[i] =  document.createElement("div").innerHTML = CoordArray_labels_path[i].path;
        svg = document.createElement("div");
        img = document.createElement("img");

        img.src = CoordArray_labels_path[i].path;
        img.alt = "marker mappa";
        img.classList.add("mrk-adjust-pos");
        img.classList.add("position-relative");
        //img.addEventListener("click", function(){showSelected(CoordArray_labels_path[i].id)});
        svg.appendChild(img);

        //ico =  new H.map.DomIcon(svg);

        ico = new H.map.DomIcon(svg, {
            // the function is called every time marker enters the viewport
            onAttach: function (clonedElement) {
                clonedElement.children[0].addEventListener("click", selected);
                clonedElement.children[0].addEventListener("click", function () { showSelected(CoordArray_labels_path[i].id) });
            },
            // the function is called every time marker leaves the viewport
            onDetach: function (clonedElement) {
                clonedElement.children[0].removeEventListener("click", selected);
                clonedElement.children[0].removeEventListener("click", function () { showSelected(CoordArray_labels_path[i].id) });
            }
        });

        var marker = new H.map.DomMarker({ lat: CoordArray_labels_path[i].lat, lng: CoordArray_labels_path[i].lng }, { icon: ico });

        map.addObject(marker);
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