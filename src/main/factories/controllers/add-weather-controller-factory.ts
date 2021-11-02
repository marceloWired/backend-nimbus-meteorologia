import { makeAddWeather } from '@/main/factories/usecases/add-weather-factory'
import { Controller } from '@/presentation/protocols'
import { AddWeatherController } from '@/presentation/controllers/weather/weather-create'

export const makeAddWeatherController = (): Controller => {
  const weatherController = new AddWeatherController(makeAddWeather())

  return weatherController
}
