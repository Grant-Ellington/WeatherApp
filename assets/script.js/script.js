var today = document.getElementById('today');
var fiveDay = document.getElementById('fiveday');
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput')
var searchBtn = document.getElementById('searchBtn')

let cityName = document.getElementById('cityName')
let dateToday = document.querySelector('#dateToday')
let tempToday = document.getElementById('tempToday')
let weatherToday = document.getElementById('weatherToday')
let iconToday = document.querySelector('#iconToday')
let humidityToday = document.querySelector('#humidityToday')
let speedToday = document.querySelector('#speedToday')

const nashvilleBtn = document.querySelector('#nashvilleBtn')
const newYorkBtn = document.querySelector('#newYorkBtn')
const lasVegasBtn = document.querySelector('#lasVegasBtn')
const chicagoBtn = document.querySelector('#chicagoBtn')
const laBtn = document.querySelector('#laBtn')


const dayOne = document.querySelector('#dayOne');
const dayTwo = document.querySelector('#dayTwo');
const dayThree = document.querySelector('#dayThree');
const dayFour = document.querySelector('#dayFour');
const dayFive = document.querySelector('#dayFive')

var key = '74ae31b27694c400a00f630e449b8981';

//Nashville Button
nashvilleBtn.addEventListener('click', function () {
  console.log('Nashville')
  let city = ('Nashville')
  getLocation(city)
})

// New York button
newYorkBtn.addEventListener('click', function () {
  console.log('Nashville')
  let city = ('New York')
  getLocation(city)
})

// Las Vegas btn
lasVegasBtn.addEventListener('click', function () {
  console.log('Nashville')
  let city = ('Las Vegas')
  getLocation(city)
})

//Chicago Btn
chicagoBtn.addEventListener('click', function () {
  console.log('Nashville')
  let city = ('Chicago')
  getLocation(city)
})

// LA btn
laBtn.addEventListener('click', function () {
  console.log('Nashville')
  let city = ('Las Angeles')
  getLocation(city)
})



searchBtn.addEventListener('click', function () {

  console.log('it works')

  let city = searchInput.value.trim()

  if(city) {
  getLocation(city);
  } else {
    alert('please enter a valid location')
  }
})




function logFunction () {
  console.log('it works');
}


function getLocation(city) {
  let cordinateAPI = "https://api.openweathermap.org/geo/1.0/direct?q="+ city +"&limit=5&appid=" +key;

  fetch(cordinateAPI)
    .then(response => response.json())
    .then(resultsLoc => {

      console.log(resultsLoc)
      let lat = resultsLoc[0].lat
      console.log(resultsLoc[0].lat)
      let lon = resultsLoc[0].lon
      console.log(lon)
      getWeather(lat, lon)

      let name = resultsLoc[0].name
      console.log(name)
      cityName.innerHTML = name
      
      getFiveDay(lat, lon)
      getUV(lat,lon)
    }

    )
  
}

function getWeather (lat, lon) {
  let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + key;

  fetch(weatherAPI)
    .then(response =>response.json())
    .then(resultsWeather => {
      console.log(resultsWeather)

      let temp = (resultsWeather.main.temp - 273.15) * 1.8 + 32
      console.log(temp)
      tempToday.innerHTML = 'Temperature:'+temp +' ˚ F'

      let weather = resultsWeather.weather[0].description
      console.log(weather)
      weatherToday.innerHTML = 'Weather: ' + weather
    })
}
function getFiveDay (lat, lon) {

    const fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat+'&lon='+lon+'&appid='+ key;

    fetch(fiveDay)
    .then(response=>response.json())
    .then(resultsFiveDay => {
      console.log(resultsFiveDay)

      let now = resultsFiveDay.list[0].dt_txt
      console.log(now)
      dateToday.innerHTML = now

      let iconNow = "http://openweathermap.org/img/w/" +resultsFiveDay.list[0].weather[0].icon+".png";
      /*let iconDayOne = "http://openweathermap.org/img/w/" +resultsFiveDay.list[1].weather[1].icon+".png";
      let iconDayTwo = "http://openweathermap.org/img/w/" +resultsFiveDay.list[2].weather[2].icon+".png";
      let iconDayThree = "http://openweathermap.org/img/w/" +resultsFiveDay.list[3].weather[3].icon+".png";
      let iconDayFour = "http://openweathermap.org/img/w/" +resultsFiveDay.list[4].weather[4].icon+".png";
      let iconDayFive = "http://openweathermap.org/img/w/" +resultsFiveDay.list[5].weather[5].icon+".png"*/
      console.log(iconNow)
      iconToday.innerHTML = '<img src=' +iconNow+ " id = image>"

      let humidityNow = resultsFiveDay.list[0].main.humidity;
      console.log(humidityNow)
      humidityToday.innerHTML = 'humidity: '+humidityNow

      let speedNow = resultsFiveDay.list[0].wind.speed
      console.log(speedNow)
      speedToday.innerHTML = 'windspeed: ' + speedNow

      /*console.log(iconDayOne)
      console.log(iconDayTwo)
      console.log(iconDayThree)
      console.log(iconDayFour)
      console.log(iconDayFive)*/

      
    });


  // retry original link with https
  /*const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '58a7ac407amsh3758280bd01fa5ap112821jsn3df462a4e577',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  
  fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
    .then(response => response.json())
    .then(resultsFiveDay => {
      console.log(resultsFiveDay)
      
      //Day one
      dayOne.innerHTML = "Date: " + resultsFiveDay.data[2].timestamp_utc+ "<br><br>Temp: " + resultsFiveDay.data[2].temp*1.8+32
      //Day two
      dayTwo.innerHTML = "Date: " + resultsFiveDay.data[3].timestamp_utc+ "<br><br>Temp: " + resultsFiveDay.data[3].temp*1.8+32
      //day three
      dayThree.innerHTML = "Date: " + resultsFiveDay.data[4].timestamp_utc+ "<br><br>Temp: " + resultsFiveDay.data[4].temp*1.8+32
      //dayfour
      dayFour.innerHTML = "Date: " + resultsFiveDay.data[5].timestamp_utc+ "<br><br>Temp: " + resultsFiveDay.data[5].temp*1.8+32
      //dayfive
      dayFive.innerHTML = "Date: " + resultsFiveDay.data[6].timestamp_utc+ "<br><br>Temp: " + resultsFiveDay.data[6].temp*1.8+32
    }
      
    )
    .catch(err => console.error(err));

      //for(i=0; i < 5; i++) {
        //var forecast = response.data[i]
        //console.log(forecast)*/
        
}

function getUV (lat, lon) {
  var radiationAPI = 'http://api.openweathermap.org/data/2.5/solar_radiation?lat='+lat+'&lon='+lon+'&appid='+key;
  
  fetch(radiationAPI)
  .then(response => response.json())
  .then(resultsUV => {
    console.log(resultsUV)
  })
}
  
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
  });*/
  