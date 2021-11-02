import { adaptRoute } from '@/main/adapters/express-route-adapters'
import { makeAddWeatherController } from '@/main/factories/controllers/add-weather-controller-factory'
import { makeListWeatherController } from '@/main/factories/controllers/list-weather-controller'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/weather/:id', adaptRoute(makeAddWeatherController()))

  router.get('/weather', adaptRoute(makeListWeatherController()))
}
