import { Controller } from '@/presentation/protocols'
import { ListWeatherController } from '@/presentation/controllers/weather/weather-list'
import { makeListWeather } from '@/main/factories/usecases/list-weather-factory'

export const makeListWeatherController = (): Controller => {
  const weatherControllerList = new ListWeatherController(makeListWeather())

  return weatherControllerList
}
