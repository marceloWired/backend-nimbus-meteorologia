import { DatabaseHelper } from '../infra/db/database-helper'

const PORT = 3001

DatabaseHelper.connect()
  .then(async () => {
    const { setupApp } = await import ('./config/app')
    const app = await setupApp()

    app.listen(PORT, () => {
      console.log(`Server up on http://localhost:${PORT}`)
    })
  })
  .catch(console.error)
