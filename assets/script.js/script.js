var today = document.getElementById('today');
var fiveDay = document.getElementById('fiveday');
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput')
var searchBtn = document.getElementById('searchBtn')

var key = '8e63ee673b69ef9b660b0e01ef8bfc2a';

let city = "Nashville"

searchBtn.addEventListener('click', logFunction);

forSubmitHandler =  function(event) {
    event.preventDefault()

    var location = searchInput.value.trim()
    if(location) {
        getLocation(location)

        today.textContent = '';
        searchInput.value = '';
    } else {
      alert('Please enter valid location')
    }

}


function logFunction () {
  console.log('it works');
}


function getLocation() {
  let cordinateAPI = "https://api.openweathermap.org/geo/1.0/direct?q="+ city +"&limit=5&appid=8e63ee673b69ef9b660b0e01ef8bfc2a"

  fetch(cordinateAPI)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    }

    )
  
}

getLocation();

/*var getWeather = function (lat, lon) {
  let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + key;

  fetch(weatherAPI)
  .then( function (response) {
    response.json().then( function (data) {
      console.log(data)

    })
  })
}
getLocation()*/

/*fetch('http://api.openweathermap.org/geo/1.0/direct?q=Tennessee&limit=5&appid=8e63ee673b69ef9b660b0e01ef8bfc2a', {
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
  */