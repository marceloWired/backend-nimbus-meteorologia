import { CreateWeatherDTO } from '@/infra/db/dtos/create-weather-DTO'
import { WeatherModel } from '@/domain/models/weather'

export interface WeatherRepository {
  add? (data: CreateWeatherDTO): Promise<WeatherModel>

  listByDistrict? (city: string, district: string): Promise<WeatherModel[]>
}
