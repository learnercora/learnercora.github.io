const weatherIcon = document.querySelector("#weather-icon");
const tempDesc = document.querySelector("#temp-desc");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=24.81&lon=120.97&units=metric&appid=a688831c2a7f3e05d05b5fc3c28b7210";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) { 
        console.log(error);
    }
}

function displayResults(data) {
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    tempDesc.innerHTML = `${temp}&deg;C - ${desc.toUpperCase()}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${data.weather[0].icon}`)
}

apiFetch();