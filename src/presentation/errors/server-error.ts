export class ServerError extends Error {
  constructor () {
    super('Internal server error. Please try again in few moments')
    this.name = 'ServerError'
  }
}
