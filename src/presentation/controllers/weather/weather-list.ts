import { Controller, HttpResponse } from '@/presentation/protocols/index'
import { ListWeather } from '@/domain/usecases/list-weather'
import { badRequest, serverError } from '@/presentation/helpers/http-helper'
import { MissingParamError } from '@/presentation/errors'

export class ListWeatherController implements Controller {
  private readonly listWeather: ListWeather

  constructor (listWeather: ListWeather) {
    this.listWeather = listWeather
  }

  async handle (httpRequest: any): Promise<HttpResponse> {
    try {
      const requiredFields = ['city', 'district']

      for (const field of requiredFields) {
        if (!httpRequest[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { city, district } = httpRequest

      const weatherList = await this.listWeather.list(city, district)

      return {
        statusCode: 200,
        body: weatherList
      }
    } catch (err) {
      return serverError()
    }
  }
}
