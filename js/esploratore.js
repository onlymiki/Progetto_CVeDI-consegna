document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById("component");
            container.innerHTML = html;
            const icon4 = document.getElementById('icon_4');
            const link4 = document.getElementById('link4');
            if (icon4 && link4) {
                icon4.src = "/img/icon/icon_home/icona_info_dettagliate1.svg";
                link4.href = "/2_info.html";
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
function hidepop() {
    document.getElementById("pop-w").classList.toggle("d-none");
    document.getElementById("bg-work").classList.toggle("d-none");
}
function workingpop() {
    document.getElementById("pop-w").classList.toggle("d-none");
    document.getElementById("bg-work").classList.toggle("d-none");
}
// ---------- Componente Navbar ----------
document.addEventListener('DOMContentLoaded', function () {
    elm2 = document.getElementById("news1");
    new Splide(elm2, {
        type: 'loop',
        perPage: 4,
        perMove: 2,
        gap: "40px",
        pagination: false,
        arrowPath: "M4.65574 0.836838C3.59068 -0.278946 1.86387 -0.278946 0.7988 0.836838C-0.266267 1.95262 -0.266267 3.76166 0.7988 4.87745L15.234 20L0.7988 35.1225C-0.266267 36.2383 -0.266267 38.0474 0.7988 39.1632C1.86387 40.2789 3.59068 40.2789 4.65574 39.1632L21.0194 22.0203C22.0844 20.9045 22.0844 19.0955 21.0194 17.9797L4.65574 0.836838Z",
        classes: {
            arrows: 'splide__arrows news-arrows',
            arrow: 'splide__arrow news-arrow',
            prev: 'splide__arrow--prev news-prev',
            next: 'splide__arrow--next news-next',
        }
    }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
    elm2 = document.getElementById("news2");
    new Splide(elm2, {
        type: 'loop',
        perPage: 4,
        perMove: 2,
        gap: "40px",
        pagination: false,
        arrowPath: "M4.65574 0.836838C3.59068 -0.278946 1.86387 -0.278946 0.7988 0.836838C-0.266267 1.95262 -0.266267 3.76166 0.7988 4.87745L15.234 20L0.7988 35.1225C-0.266267 36.2383 -0.266267 38.0474 0.7988 39.1632C1.86387 40.2789 3.59068 40.2789 4.65574 39.1632L21.0194 22.0203C22.0844 20.9045 22.0844 19.0955 21.0194 17.9797L4.65574 0.836838Z",
        classes: {
            arrows: 'splide__arrows news-arrows',
            arrow: 'splide__arrow news-arrow',
            prev: 'splide__arrow--prev news-prev',
            next: 'splide__arrow--next news-next',
        }
    }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
    elm2 = document.getElementById("missioni");
    new Splide(elm2, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: "40px",
        pagination: false,
        arrowPath: "M4.65574 0.836838C3.59068 -0.278946 1.86387 -0.278946 0.7988 0.836838C-0.266267 1.95262 -0.266267 3.76166 0.7988 4.87745L15.234 20L0.7988 35.1225C-0.266267 36.2383 -0.266267 38.0474 0.7988 39.1632C1.86387 40.2789 3.59068 40.2789 4.65574 39.1632L21.0194 22.0203C22.0844 20.9045 22.0844 19.0955 21.0194 17.9797L4.65574 0.836838Z",
        classes: {
            arrows: 'splide__arrows mission-arrows',
            arrow: 'splide__arrow mission-arrow',
            prev: 'splide__arrow--prev mission-prev',
            next: 'splide__arrow--next mission-next',
        }
    }).mount();
});


//Step 1: initialize communication with the platform
// Replace variable YOUR_API_KEY with your own apikey

var platform = new H.service.Platform({
    apikey: 'j7EOzFBpEbCEvUqYvs-k7f9wt0AW7hbLM-Z7oubezzI'
});
var defaultLayers = platform.createDefaultLayers();
//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        center: { lat: 64.83914178810658, lng: -16.99496790116415 },
        zoom: 9,
        pixelRatio: window.devicePixelRatio || 1
    }
);
// This adds a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

addDomMarker(map);

function addDomMarker(map) {

    function changeOpacity(evt) {
        evt.target.style.opacity = 0.6;
    }

    function changeOpacityToOne(evt) {
        evt.target.style.opacity = 1;
    }

    var CoordArray_labels_path = [{ lat: 65.00783697162802, lng: -17.399011346557337, path: "img/markers/mrk_expl_frana.svg" },
    { lat: 64.89908732816991, lng: -16.62743094006825, path: "img/markers/mrk_expl_rapide.svg" },
    { lat: 64.75958650500463, lng: -16.862601317696182, path: "img/markers/mrk_expl_ghiaccio.svg" },
    { lat: 64.67575313465907, lng: -17.320445227657007, path: "img/markers/mrk_expl_vulcano.svg" }];


    for (let i = 0; i < CoordArray_labels_path.length; i++) {
        //svgArray[i] =  document.createElement("div").innerHTML = CoordArray_labels_path[i].path;
        svg = document.createElement("div");
        img = document.createElement("img");

        img.src = CoordArray_labels_path[i].path;
        img.classList.add("mrk-adjust-pos");
        img.classList.add("position-relative");
        svg.appendChild(img);
        ico = new H.map.DomIcon(svg);

        var marker = new H.map.DomMarker({ lat: CoordArray_labels_path[i].lat, lng: CoordArray_labels_path[i].lng }, { icon: ico });

        map.addObject(marker);
    }
}