import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', weatherData: null })
})

router.post('/weather', isLoggedIn, apiCtrl.getWeather)

router.get('/weatherReadings', isLoggedIn, apiCtrl.weatherIndex)

export {
  router
}
