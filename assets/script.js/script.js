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

//Day One Dom Selectors
const dayOne = document.querySelector('#dayOne');
const dayOneDate = document.querySelector('#dayOneDate')
const dayOneIcon = document.querySelector('#dayOneIcon')
const dayOneTemp = document.querySelector('#dayOneTemp')
const dayOneSpeed = document.querySelector('#dayOneSpeed')
const dayOneHum = document.querySelector('#dayOneHum')

//day Two DOM selectors

const dayTwoDate = document.querySelector('#dayTwoDate')
const dayTwoIcon = document.querySelector('#dayTwoIcon')
const dayTwoTemp = document.querySelector('#dayTwoTemp')
const dayTwoSpeed = document.querySelector('#dayTwoSpeed')
const dayTwoHum = document.querySelector('#dayTwoHum')

//day three Dom selectors

const dayThreeDate = document.querySelector('#dayThreeDate')
const dayThreeIcon = document.querySelector('#dayThreeIcon')
const dayThreeTemp = document.querySelector('#dayThreeTemp')
const dayThreeSpeed = document.querySelector('#dayThreeSpeed')
const dayThreeHum = document.querySelector('#dayThreeHum')

//day four dom selectors

const dayFourDate = document.querySelector('#dayFourDate')
const dayFourIcon = document.querySelector('#dayFourIcon')
const dayFourTemp = document.querySelector('#dayFourTemp')
const dayFourSpeed = document.querySelector('#dayFourSpeed')
const dayFourHum = document.querySelector('#dayFourHum')

//day five dom selectors

const dayFiveDate = document.querySelector('#dayFiveDate')
const dayFiveIcon = document.querySelector('#dayFiveIcon')
const dayFiveTemp = document.querySelector('#dayFiveTemp')
const dayFiveSpeed = document.querySelector('#dayFiveSpeed')
const dayFiveHum = document.querySelector('#dayFiveHum')

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
      let iconDayOne = "http://openweathermap.org/img/w/" +resultsFiveDay.list[1].weather[0].icon+".png";
      let iconDayTwo = "http://openweathermap.org/img/w/" +resultsFiveDay.list[2].weather[0].icon+".png";
      let iconDayThree = "http://openweathermap.org/img/w/" +resultsFiveDay.list[3].weather[0].icon+".png";
      let iconDayFour = "http://openweathermap.org/img/w/" +resultsFiveDay.list[4].weather[0].icon+".png";
      let iconDayFive = "http://openweathermap.org/img/w/" +resultsFiveDay.list[5].weather[0].icon+".png"
      console.log(iconNow)
      iconToday.innerHTML = '<img src=' +iconNow+ " id = image>"

      let humidityNow = resultsFiveDay.list[0].main.humidity;
      console.log(humidityNow)
      humidityToday.innerHTML = 'humidity: '+humidityNow

      let speedNow = resultsFiveDay.list[0].wind.speed
      console.log(speedNow)
      speedToday.innerHTML = 'windspeed: ' + speedNow
      
      //day One forecast
      dayOneDate.innerHTML = 'date: '+ resultsFiveDay.list[1].dt_txt
      dayOneIcon.innerHTML = '<img src=' +iconDayOne+ " id = image>"
      dayOneTemp.innerHTML = '<p class= text-break>Temp: '+((resultsFiveDay.list[1].main.temp - 273.15) * 1.8 + 32)+'</p>'
      dayOneSpeed.innerHTML = 'Windspeed: '+resultsFiveDay.list[1].wind.speed
      dayOneHum.innerHTML = 'humidity: ' +resultsFiveDay.list[1].main.humidity
      
      // day two forecast
      dayTwoDate.innerHTML = 'date: '+ resultsFiveDay.list[2].dt_txt
      dayTwoIcon.innerHTML = '<img src=' +iconDayTwo+ " id = image>"
      dayTwoTemp.innerHTML = '<p class= text-break>Temp: '+((resultsFiveDay.list[2].main.temp - 273.15) * 1.8 + 32)+'</p>'
      dayTwoSpeed.innerHTML = 'Windspeed: '+resultsFiveDay.list[2].wind.speed
      dayTwoHum.innerHTML = 'humidity: ' +resultsFiveDay.list[2].main.humidity

      //day three forecast
      dayThreeDate.innerHTML = 'date: '+ resultsFiveDay.list[3].dt_txt
      dayThreeIcon.innerHTML = '<img src=' +iconDayThree+ " id = image>"
      dayThreeTemp.innerHTML = '<p class= text-break>Temp: '+((resultsFiveDay.list[3].main.temp - 273.15) * 1.8 + 32)+'</p>'
      dayThreeSpeed.innerHTML = 'Windspeed: '+resultsFiveDay.list[3].wind.speed
      dayThreeHum.innerHTML = 'humidity: ' +resultsFiveDay.list[3].main.humidity

      //day four forecast
      dayFourDate.innerHTML = 'date: '+ resultsFiveDay.list[4].dt_txt
      dayFourIcon.innerHTML = '<img src=' +iconDayFour+ " id = image>"
      dayFourTemp.innerHTML = '<p class= text-break>Temp: '+((resultsFiveDay.list[4].main.temp - 273.15) * 1.8 + 32)+'</p>'
      dayFourSpeed.innerHTML = 'Windspeed: '+resultsFiveDay.list[4].wind.speed
      dayFourHum.innerHTML = 'humidity: ' +resultsFiveDay.list[4].main.humidity

      //day five Forecast
      dayFiveDate.innerHTML = 'date: '+ resultsFiveDay.list[5].dt_txt
      dayFiveIcon.innerHTML = '<img src=' +iconDayFive+ " id = image>"
      dayFiveTemp.innerHTML = '<p class= text-break>Temp: '+((resultsFiveDay.list[5].main.temp - 273.15) * 1.8 + 32)+'</p>'
      dayFiveSpeed.innerHTML = 'Windspeed: '+resultsFiveDay.list[5].wind.speed
      dayFiveHum.innerHTML = 'humidity: ' +resultsFiveDay.list[5].main.humidity


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
  