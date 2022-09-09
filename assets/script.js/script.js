var today = document.getElementById('today');
var fiveDay = document.getElementById('fiveday');
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput')

var key = '8e63ee673b69ef9b660b0e01ef8bfc2a';

var forSubmitHandler =  function(event) {
    event.preventDefault()

    location = searchinput.value.trim()

    if(location) {
        findCoordinates(location)

        today.textContent = '';
        searchInput.value = '';
    } else {
      alert('Please enter valid location')
    }

}

var getLocation = function () {
  let cordinateAPI = "http://api.openweathermap.org/geo/1.0/direct?q=Tennessee&limit=5&appid=8e63ee673b69ef9b660b0e01ef8bfc2a"

  fetch(cordinateAPI)
    .then(function (response) {
      if (response.ok) {
        response.json().then( function (data) {
          let lat = data[0].lat
          let lon = data[0].lon
          getWeather(lat, lon)
        });
      }else{
        console.log ('no data')
      }
    })
  
  .catch(function (error) {
    alert('unable to connect to API')
  })
  
}

var getWeather = function (lat, lon) {
  let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + key;

  fetch(weatherAPI)
    if(response.ok) {
      response.json().then ( function (data){
        console.log(data)
      })
    } else {
      console.log('no data')
    }
}
getLocation()

fetch('http://api.openweathermap.org/geo/1.0/direct?q=Tennessee&limit=5&appid=8e63ee673b69ef9b660b0e01ef8bfc2a', {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });