import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', weatherData: null })
})

router.post('/weather', apiCtrl.getWeather)

export {
  router
}
