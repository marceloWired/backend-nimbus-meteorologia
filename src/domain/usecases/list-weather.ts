import { WeatherModel } from '@/domain/models/weather'

export interface ListWeather {
  list (city: string, district: string): Promise<WeatherModel[]>
}
