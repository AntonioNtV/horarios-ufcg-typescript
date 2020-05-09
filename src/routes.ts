import { Router } from 'express'
import SchedulesController from './controllers/SchedulesController'

const routes = Router()

routes.get('/', SchedulesController.index)

export default routes
