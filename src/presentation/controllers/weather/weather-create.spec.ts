import { AddWeatherController } from './weather-create'
import { MissingParamError, ServerError } from '@/presentation/errors'
import { AddWeather, addWeatherModel } from '@/domain/usecases/add-weather'
import { WeatherModel } from '@/domain/models/weather'

const makeAddWeather = (): AddWeather => {
  class AddWeatherStub implements AddWeather {
    async add (weather: addWeatherModel): Promise<WeatherModel> {
      const fakeWeather = {
        id: 1,
        city: 'valid_city',
        district: 'valid_district',
        subtitle: 'valid-subtitle',
        milimeters: 0.1,
        date: new Date(),
        hour: 'valid_hour'
      }

      return await new Promise(resolve => resolve(fakeWeather))
    }
  }

  return new AddWeatherStub()
}

interface SutTypes {
  sut: AddWeatherController
  addWeatherStub: AddWeather
}

const makeSut = (): SutTypes => {
  const addWeatherStub = makeAddWeather()
  const sut = new AddWeatherController(addWeatherStub)

  return {
    sut,
    addWeatherStub
  }
}

describe('Weather Controller', () => {
  test('Should return 400 if no district is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      city: 'valid_city',
      milimeters: 0.1,
      date: new Date(),
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('district'))
  })

  test('Should return 400 if no city is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      district: 'valid_district',
      milimeters: 0.1,
      date: new Date(),
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('city'))
  })

  test('Should return 400 if no milimeters is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      city: 'valid_city',
      district: 'valid_district',
      date: new Date(),
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('milimeters'))
  })

  test('Should return 400 if no date is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      city: 'valid_city',
      district: 'valid_district',
      milimeters: 0.1,
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('date'))
  })

  test('Should return 400 if no hour is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      city: 'valid_city',
      district: 'valid_district',
      milimeters: 0.1,
      date: new Date()
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('hour'))
  })

  test('Should return 500 addWeather throws an exception', async () => {
    const { sut, addWeatherStub } = makeSut()

    jest.spyOn(addWeatherStub, 'add').mockImplementationOnce(() => {
      throw new Error()
    })

    const httpRequest = {
      city: 'valid_city',
      district: 'valid_district',
      milimeters: 0.1,
      date: new Date(),
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })

  test('Should return 201 if weather registered successfully', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      city: 'valid_city',
      district: 'valid_district',
      milimeters: 0.1,
      date: new Date(),
      hour: 'valid_hour'
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(201)
  })
})
