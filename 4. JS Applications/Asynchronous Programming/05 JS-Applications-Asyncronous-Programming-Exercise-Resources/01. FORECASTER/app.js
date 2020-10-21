function attachEvents() {
    let btnGetWeather = document.getElementById("submit");
    btnGetWeather.addEventListener("click", getWeather);
    let code;
    let LOCATIONS_URL = "https://judgetests.firebaseio.com/locations.json";
    let TODAY_URL = `https://judgetests.firebaseio.com/forecast/today/##.json`;
    let UPCOMING_URL = `https://judgetests.firebaseio.com/forecast/upcoming/##.json`;
    let location = document.getElementById("location");
    let forecast = document.getElementById("forecast");
    let divCurrent = document.getElementById("current");
    let divUpcoming = document.getElementById("upcoming");
    let divClassForecast = document.createElement("div");
    
    let conditionSymbol = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast": "☁",
        "Rain": "☂",
        "Degrees": "°"
    };
    
    let respToJSON = (response) => {
        if (response.status >= 400) {
            throw "Error";
        };

        return response.json();
    };

    function getWeather() {
        fetch(LOCATIONS_URL)
        .then(respToJSON)
        .then(data => {
            code = undefined;
            for (let element of data) {
                if (location.value === element.name) {
                    code = element.code;
                };
            };

            if (code === undefined) {
                throw "Error";
            }

            Promise.all([today(code), upcoming(code)]);
            forecast.removeAttribute("style");
        })
        .catch(err => {
            forecast.setAttribute("style", "display: none");
        });
    };
    
    function today(code) {
        fetch(TODAY_URL.replace("##", code))
            .then(respToJSON)
            .then(data => {
                let forRemove = document.querySelector(".forecasts");
                if (forRemove !== null) {
                    forRemove.remove();
                };

                let divClassForecast = document.createElement("div");
                divClassForecast.setAttribute("class", "forecasts");

                let spanClassConditionSymbol = document.createElement("span");
                spanClassConditionSymbol.setAttribute("class", "condition symbol");
                spanClassConditionSymbol.textContent = conditionSymbol[data.forecast.condition];
                let spanClassCondition = document.createElement("span");
                spanClassCondition.setAttribute("class", "condition");

                let arr = [data.name, `${data.forecast.low}°/${data.forecast.high}°`, data.forecast.condition];

                for (let element of arr) {
                    let spanClassForecastData = document.createElement("span");
                    spanClassForecastData.setAttribute("class", "forecast-data");
                    spanClassForecastData.textContent = element;
                    spanClassCondition.appendChild(spanClassForecastData);
                };

                divClassForecast.appendChild(spanClassConditionSymbol);
                divClassForecast.appendChild(spanClassCondition);
                divCurrent.appendChild(divClassForecast);
            });
    };

    function upcoming(code) {
        fetch(UPCOMING_URL.replace("##", code))
            .then(respToJSON)
            .then(data => {
                let forDelete = document.querySelector(".forecast-info");

                if (forDelete !== null) {

                    while (forDelete.hasChildNodes()) {
                        forDelete.removeChild(forDelete.lastChild);
                    };

                    forDelete.remove();
                };

                divClassForecast.setAttribute("class", "forecast-info");

                for (let element of data.forecast) {
                    let obj = {
                        symbol: conditionSymbol[element.condition],
                        degrees: `${element.low}°/${element.high}°`,
                        condition: element.condition
                    };
                    craeteForecast(obj);
                }

            });
    };

    function craeteForecast(obj) {
        let spanClassUpcoming = document.createElement("span");
        spanClassUpcoming.setAttribute("class", "upcoming");
        
        let spanClassConditionSymbol = document.createElement("span");
        spanClassConditionSymbol.setAttribute("class", "symbol");
        spanClassConditionSymbol.textContent = obj.symbol;
        let spanClassForecastData1 = document.createElement("span");
        spanClassForecastData1.setAttribute("class", "forecast-data");
        spanClassForecastData1.textContent = obj.degrees;
        let spanClassForecastData2 = document.createElement("span");
        spanClassForecastData2.setAttribute("class", "forecast-data");
        spanClassForecastData2.textContent = obj.condition;
        spanClassUpcoming.appendChild(spanClassConditionSymbol);
        spanClassUpcoming.appendChild(spanClassForecastData1);
        spanClassUpcoming.appendChild(spanClassForecastData2);

        divClassForecast.appendChild(spanClassUpcoming);
        divUpcoming.appendChild(divClassForecast);
    };

};

attachEvents();

