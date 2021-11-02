import { ConnectionOptions, createConnection } from 'typeorm'
import { Weather } from '@/infra/db/entity/Weather'
import * as path from 'path'

const databaseOptions: ConnectionOptions = {
  type: 'sqlite',
  database: path.join(__dirname, 'data', 'weather.sqlite'),
  entities: [Weather],
  logging: true,
  synchronize: true
}

export const DatabaseHelper = {
  async connect (): Promise<void> {
    await createConnection(databaseOptions)
  }
}
