//var button = document.querySelector('.button');
//var input = document.querySelector('.inputValue');

let weather = {
    apiKey: "eaa3102e54b1611b1a8dd20bf27af527",
    fetchWeather: function (city) {
        fetch(             //fetching the url
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    //fetching temperature data from a weather API
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".loading").classList.remove("d-none");
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.trunc(temp) + "°C";
      
        // C = (5/9)*(F-32)

        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";
      
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

//while clicking on the search-icon
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

//while pressing the enter-key
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});


weather.fetchWeather("");



















/*
 
 baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.getElementById('input-box');

//Event Listener function on keypress
searchInputBox.addEventListener('keypress', ((event) => {
 console.log(searchInputBox.value);
})
);

//Get Weather Report

//Show Weather Report

//Data Manage
*/