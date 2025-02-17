// ---------- Navbar ----------
document.addEventListener("DOMContentLoaded", () => {
    fetch('../navbar.html')
    .then(response => response.text())
    .then(html => {
        const container = document.getElementById('component');
        container.innerHTML = html;
    
        const icon4 = document.getElementById('icon_4');
        const link4 = document.getElementById('link4');
        const home = document.getElementById('home');
    
        if (icon4 && link4) {
            icon4.src = "/img/icon/icon_home/icona_info_dettagliate.svg";
            link4.href = "/info_luoghi.html";
            home.href = "/index.html"
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