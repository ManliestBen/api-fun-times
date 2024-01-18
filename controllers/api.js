import { Weather } from "../models/weather.js"
import { Profile } from "../models/profile.js"


function getWeather(req, res) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode},us&appid=${process.env.WEATHER_API_KEY}`)
  .then(apiResponse => {
    apiResponse.json()
    .then(weatherData => {
      // Create a weather document using Weather model
      Weather.create({
        cityName: weatherData.name,
        weatherIcon: weatherData.weather[0].icon,
        currentTempInK: weatherData.main.temp
      })
      .then(newWeatherDocument => {
        // Find the profile of the logged in user
        Profile.findById(req.user.profile._id)
        .then(loggedInUsersProfile => {
          // Add the weather document to the weatherReadings array in the profile
          loggedInUsersProfile.weatherReadings.push(newWeatherDocument)
          // Save the profile
          loggedInUsersProfile.save()
          .then(() => {
            res.render('index', {
              weatherData,
              title: 'Home Page'
            })
          })
        })
      })
    })
  })
}

export {
  getWeather
}