import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import ImportScheduleService from './services/ImportScheduleService'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.initialization()
    }

    private middleware ():void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database ():void {
      mongoose.connect('mongodb://localhost:27017/schedule', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }

    private async initialization (): Promise<void> {
      await ImportScheduleService.run('data.csv')
      this.middleware()
      this.database()
      this.routes()
    }
}

export default new App().express
