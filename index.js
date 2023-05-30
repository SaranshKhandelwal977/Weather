const temperature = document.querySelector(".temperature span");
const cityName = document.querySelector(".city-name");
const humidity = document.querySelector(".humidity span");
const windSpeed = document.querySelector(".windspeed span");
const weatherType = document.querySelector(".weathertype");
const searchForm = document.querySelector(".search");
const inputField = document.querySelector(".search input");
const inputBtn = document.querySelector(".search button");
const countryIcon = document.querySelector(".country-icon");
const container = document.querySelector(".main");
const API_KEY = "adaab73fada4f6827ef6c0b5aa7380fd";
const apiUrl = "https:://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function weather(city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        var data = await response.json();
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "℃" ;
        countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
        humidity.innerHTML = data.main.humidity + "%";        
        windSpeed.innerHTML = data.wind.speed + " km/hr";
        console.log(data);
        if(data.weather[0].main == "Clouds"){
            weatherType.src = "images/clouds.png";
        }  
        else if(data.weather[0].main == "Clear"){
            weatherType.src = "images/clear.png";
        }  
        else if(data.weather[0].main == "Rain"){
            weatherType.src = "images/clain.png";
        }  
        else if(data.weather[0].main == "Drizzle"){
            weatherType.src = "images/drizzle.png";
        } 
        else if(data.weather[0].main == "Mist"){
            weatherType.src = "images/mist.png";
        }  
        else if(data.weather[0].main == "Snow"){
            weatherType.src = "images/snow.png";
        }
        container.style.display = "block";  
}   
inputBtn.addEventListener("click", () => {
    weather(inputField.value)
})
