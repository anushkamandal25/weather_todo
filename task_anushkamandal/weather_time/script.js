let weather={
    apiKey: "be02a5f240343b81a3f156542c119854",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=be02a5f240343b81a3f156542c119854"
        )
        .then((response) => response.json())
        .then((data) => //console.log(data));
        this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { temp, humidity } = data.main;
        console.log(name,temp,humidity)

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + " Standard Units.";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    }
};  