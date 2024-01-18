function getWeather(req, res) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode},us&appid=${process.env.WEATHER_API_KEY}`)
  .then(apiResponse => {
    apiResponse.json()
    .then(weatherData => {
      console.log(weatherData)
    })
  })
  res.redirect('/')
}

export {
  getWeather
}