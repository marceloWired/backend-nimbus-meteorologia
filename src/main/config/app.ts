import setupRoutes from '@/main/config/routes'

import express, { Express } from 'express'

import cors from 'cors'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  setupRoutes(app)
  return app
}
