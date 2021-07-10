let weather = {
    apikey: "905b0d466c942ee5497aff9f249d1328",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;        
        document.querySelector(".city").innerText = "Weather in " + name;
        //document.querySelector(".icon").src = "https://openweathermap.org/img/wn"+ icon +"@2px.png";
        document.querySelector(".description").innerText ="Description: " + description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h";
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?s "+ name +"')"
    },
        search : function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};

document.querySelector(".search button")
.addEventListener("click",function(){
        weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup",function(event){
    if(event.key=="Enter")    
    weather.search();
});


