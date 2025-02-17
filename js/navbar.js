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

        const iconWeather = document.querySelectorAll(".icon-weather");

        for (let i = 0; i < iconWeather.length; i++) {
            iconWeather[i].src = "/img/icon/icon_navbar/cloud.svg";
            iconWeather[i].classList.remove("mt-2");
        }


        document.getElementById("time").innerHTML = hour + "<br>" + minute;
        document.getElementById("time2").innerHTML = hour + ":" + minute;

        for (let i = 1; i <= 5; i++) {
            let nextHour = (now.getHours() + i) % 24;
            document.getElementById(`hour+${i}`).innerHTML = formatTime(nextHour);
        }


        // Per aprire la tendina menu
        function toggleDisplay() {
            const openHomeElements = document.getElementsByClassName("open");
            const closeButton = document.getElementById("close-button");

            for (let element of openHomeElements) {
                element.classList.toggle("hide");
            }

            closeButton.classList.toggle("hide");
        }

        // Per aprire la tendina meteo
        function toggleDisplay2() {
            const openHomeElements = document.getElementsByClassName("open-2");
            const closeButton = document.getElementById("close-button-2");

            for (let element of openHomeElements) {
                element.classList.toggle("hide");
            }

            closeButton.classList.toggle("hide");
        }


        // Per aprire tendina accessibilità
        function toggleDisplay3() {
            const accessibilitySection = document.getElementById("accessibility");
            if (accessibilitySection) {
                accessibilitySection.classList.toggle("hide");
            }
        }

        // Per bottone switch
        function toggleAble(id) {
            const ableElement = document.getElementById(`able${id}`);
            const disableElement = document.getElementById(`disable${id}`);

            if (ableElement && disableElement) {
                ableElement.classList.toggle("hide");
                disableElement.classList.toggle("hide");
            }
        }

        // Per blur (maaa è da correggere)
        const accessibilitySection = document.getElementById("access");
        const access = document.getElementById("access");
        const menu = document.getElementById("menu");
        const sun = document.getElementById("sun");
        const blackBlock = document.getElementById("black-block");
        const x = document.getElementById("close-button");
        const x2 = document.getElementById("close-button-2");
        const btnSOS = document.getElementById("btn-sos");
        const btnOK = document.getElementById("btn-ok");


        const elements = [menu, sun, access, btnSOS];
        const visibleElements = [x, x2, access, btnSOS, btnOK];
        let cont = 0;
        let click = 0;
        let clickSOS = 0;

        elements.forEach(element => {
            if (element) {
                element.addEventListener("click", function () {
                    cont++;
                    if (blackBlock.classList.contains("hide")) {
                        blackBlock.classList.remove("hide");
                    }
                    if(element === access){
                        click++;
                    }
                    if(element === btnSOS){
                        clickSOS++;
                    }
                });
            }

            
        })

        visibleElements.forEach(vis => {
            if (vis) {
                vis.addEventListener("click", function () {
                    cont--;
                    if (!(blackBlock.classList.contains("hide")) && (cont === 0) && (click %2 == 0) && (clickSOS %2 == 0)) {
                        blackBlock.classList.add("hide");
                    }

                    if(vis === btnOK){
                        window.location.reload();
                    }
                })
            }
        });


        btnSOS.addEventListener("click", function () {
            const pop = document.getElementById("sos");
            pop.classList.toggle("visibility");
        });
        btnOK.addEventListener("click", function () {
            const pop = document.getElementById("sos");
            pop.classList.toggle("visibility");
        });

        // Per bottone indietro
        document.getElementById("back").addEventListener("click", function () {
            window.history.back();
        });
