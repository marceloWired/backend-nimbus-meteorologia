import { AddWeather } from '@/domain/usecases/add-weather'
import { WeatherRepository } from '@/data/protocols/weather-repository'
import { CreateWeatherDTO } from '@/infra/db/dtos/create-weather-DTO'
import { WeatherModel } from '@/domain/models/weather'

export class DbAddWeather implements AddWeather {
  constructor (private readonly addWeatherRepository: WeatherRepository) {}

  async add (weather: CreateWeatherDTO): Promise<WeatherModel> {
    return await this.addWeatherRepository.add(weather)
  }
}
