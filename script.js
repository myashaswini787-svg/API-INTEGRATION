const apiKey = "1e46ed30e4775de4730c277ad87dff23";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API response error");
        }

        const data = await response.json();

        document.getElementById("weatherCard").style.display = "block";
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp + " °C";
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity + " %";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

    } catch (error) {
        alert("Error fetching data. Check API key or internet.");
        console.error(error);
    }
}
