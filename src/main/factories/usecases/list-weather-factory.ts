import { ListWeather } from '@/domain/usecases/list-weather'
import { WeatherRepository } from '@/infra/db/repositories/weather-repository'
import { DbListWeather } from '@/data/usecases/db-list-weather'

export const makeListWeather = (): ListWeather => {
  const weatherRepository = new WeatherRepository()

  return new DbListWeather(weatherRepository)
}
