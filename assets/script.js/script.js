var today = document.getElementById('today');
var fiveDay = document.getElementById('fiveday');
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput')
var searchBtn = document.getElementById('searchBtn')

var key = '74ae31b27694c400a00f630e449b8981';

let city = ''

searchBtn.addEventListener('click', submitCity);

function submitCity () {
  let city = searchInput.value
  if(city) {
    getLocation(city)
  } else {
    alert('This is not a avaliable city')
  }
}

submitCity();


function logFunction () {
  console.log('it works');
}


function getLocation() {
  let cordinateAPI = "https://api.openweathermap.org/geo/1.0/direct?q="+ city +"&limit=5&appid=" +key;

  fetch(cordinateAPI)
    .then(response => response.json())
    .then(resultsLoc => {
      let lat = resultsLoc[0].lat
      console.log(results[0].lat)
      let lon = resultsLoc[0].lon
      console.log(lon)
      getWeather(lat, lon)
    }

    )
  
}

getLocation();

function getWeather (lat, lon) {
  let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + key;

  fetch(weatherAPI)
    .then(response =>response.json())
    .then(resultsWeather => {
      console.log(resultsWeather.main
        )
    })
}
getLocation()

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