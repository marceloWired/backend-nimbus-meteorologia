import { Controller, HttpResponse } from '@/presentation/protocols/'
import { MissingParamError } from '@/presentation/errors/'
import { badRequest, serverError, created } from '@/presentation/helpers/http-helper'
import { AddWeather } from '@/domain/usecases/add-weather'
import { convertMilimetersToSubtitle } from '@/presentation/utils/convertMilimetersToSubtitle'

export class AddWeatherController implements Controller {
  private readonly addWeather: AddWeather

  constructor (addWeather: AddWeather) {
    this.addWeather = addWeather
  }

  async handle (httpRequest: any): Promise<HttpResponse> {
    try {
      const requiredFields = ['district', 'city', 'milimeters', 'date', 'hour']

      for (const field of requiredFields) {
        if (!httpRequest[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { city, district, milimeters, hour } = httpRequest

      const dateString = httpRequest.date

      const subtitle = convertMilimetersToSubtitle(milimeters)

      const date = new Date(dateString)

      const registeredWeather = await this.addWeather.add({
        city,
        district,
        milimeters,
        subtitle,
        date,
        hour
      })

      return created(registeredWeather)
    } catch (err) {
      return serverError()
    }
  }
}
