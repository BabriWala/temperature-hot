const inputField = document.getElementById('inputField');
const searchBtn = document.getElementById('searchBtn');
const city = document.getElementById('city');
const temprature = document.getElementById('temprature');
const weatherSitutation = document.getElementById('weather');


searchBtn.addEventListener('click', ()=>{
    // console.log('clicked');
    const search = inputField.value;
    // console.log(search);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=12272079e7a3ec13ee6d611322c8c1af`)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        city.innerText = data.name;
        // console.log(city.innerText)
        // console.log(data.name);
        temprature.innerText = data.main.temp;
        weatherSitutation.innerText = data.weather[0].main;
    })
})