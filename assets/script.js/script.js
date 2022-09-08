fetch('https://api.openweathermap.org/data/2.5/onecall?lat=36.162663&lon=-86.781601&exclude=hourly,daily&appid=74ae31b27694c400a00f630e449b8981', {
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