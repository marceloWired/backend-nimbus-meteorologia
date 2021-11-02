import { getRepository, Repository } from 'typeorm'
import { Weather } from '../entity/Weather'
import { CreateWeatherDTO } from '../dtos/create-weather-DTO'
import { WeatherModel } from '../../../domain/models/weather'
import { AddWeather } from '../../../domain/usecases/add-weather'

export class WeatherRepository implements AddWeather {
  private readonly repository: Repository<Weather>

  constructor () {
    this.repository = getRepository(Weather)
  }

  async add ({ city, district, milimeters, date, hour, subtitle }: CreateWeatherDTO): Promise<WeatherModel> {
    const weather = this.repository.create({
      city,
      district,
      milimeters,
      subtitle,
      date,
      hour
    })

    await this.repository.save(weather)

    return weather
  }

  async listByDistrict (city: string, district: string): Promise<WeatherModel[]> {
    const weatherList = await this.repository.find({
      district: district,
      city: city
    })

    return weatherList
  }
}
