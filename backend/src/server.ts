import { app } from './app.js'
import { env } from './config/env.js'

app.listen(env.APP_PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${env.APP_PORT}`)
})
