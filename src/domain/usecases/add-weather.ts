import { WeatherModel } from '../models/weather'

export interface addWeatherModel {
  city: string
  district: string
  milimeters: number
  subtitle: string
  date: Date
  hour: string
}

export interface AddWeather {
  add (weather: addWeatherModel): Promise<WeatherModel>
}
