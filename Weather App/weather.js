const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    'f00c38e0279b7bc85480c3fe775d518c';
 
$(document).ready(function () {
    weatherFn('Cleveland');
});
// async function weatherFn(cName){
//     const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
//     fetch (temp)
//         .then(function(res){
//             if(res.ok){
//                 return res.json();
//             }
//             else{
//                 throw new Error('City not found.');
//             }
//         })
//         .then(function(data){
//             weatherDisplay(data);
//         })
//         .catch(function(error){
//             console.error("Error finding data", error);
//             alert("An error occured");
//         });
// }
async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            displayWeather(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
// function displayWeather(data){

// document.getElementById('city-name').textContent = data.name;
// document.getElementById('date').textContent = new Date().toLocaleString();
// document.getElementById('temperature').innerHTML = `${data.main.temp}°F`
// document.getElementById('description').textContent = data.weather[0].description;
// document.getElementById('wind-speed').innerHTML = `${data.wind.speed}mp/h`
// document.getElementById('weather-info').style.display = 'block'
// document.getElementById('weather-image').setAttribute('src','`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`')


// }
function displayWeather(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().
        format('MMMM Do YYYY, h:mm:ss a'));
    const temperatureFahrenheit = (data.main.temp * 9/5) + 32;
        $('#temperature').html(`${temperatureFahrenheit.toFixed(2)}°F`);
        $('#description').text(data.weather[0].description);
        // Convert wind speed from m/s to mph
    const windSpeedMph = data.wind.speed * 2.237;
        $('#wind-speed').html(`Wind Speed: ${windSpeedMph.toFixed(2)} mph`);
    $('#description').
        text(data.weather[0].description);
   
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    $('#weather-icon').attr('src', iconUrl);
    $('#weather-icon').attr('alt', data.weather[0].description);
    $('#weather-info').fadeIn();
}