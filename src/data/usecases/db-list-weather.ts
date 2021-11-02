import { ListWeather } from '@/domain/usecases/list-weather'
import { WeatherRepository } from '@/data/protocols/weather-repository'
import { WeatherModel } from '@/domain/models/weather'

export class DbListWeather implements ListWeather {
  constructor (private readonly listWeatherRepository: WeatherRepository) {}

  async list (city: string, district: string): Promise<WeatherModel[]> {
    const weatherList = await this.listWeatherRepository.listByDistrict(city, district)

    return weatherList
  }
}
