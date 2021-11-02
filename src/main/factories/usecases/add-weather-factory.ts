import { AddWeather } from '@/domain/usecases/add-weather'
import { WeatherRepository } from '@/infra/db/repositories/weather-repository'
import { DbAddWeather } from '@/data/usecases/db-add-weather'

export const makeAddWeather = (): AddWeather => {
  const weatherRepository = new WeatherRepository()

  return new DbAddWeather(weatherRepository)
}
