const apikey = "da8ff454e03e47cc522b15eefc0c7ecb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const WeatherIcon= document.querySelector(".Weather-icon");

async function Checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }

    else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    
        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src="image/clouds.png";
        }
    
        else if(data.weather[0].main == "Clear"){
             WeatherIcon.src="image/clear.png";
        }
    
        
        else if(data.weather[0].main == "Rain"){
             WeatherIcon.src="image/rain.png";
        }
    
    
    
        
        else if(data.weather[0].main == "Snow"){
             WeatherIcon.src="image/snow.png";
        }
        else if(data.weather[0].main == "Humidity"){
             WeatherIcon.src="image/humidity.png";
        }
        
        else if(data.weather[0].main == "Wind"){
             WeatherIcon.src="image/wind.png";
        }
        else if(data.weather[0].main == "Mist"){
             WeatherIcon.src="image/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
             WeatherIcon.src="image/drizzle.png";
        }
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
    }
    


}

searchbtn.addEventListener("click", ()=>{
    Checkweather(searchbox.value);
})


