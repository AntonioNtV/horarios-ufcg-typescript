import { Router } from 'express'
import ScheduleController from './controllers/ScheduleController'

const routes = Router()

routes.get('/', ScheduleController.index)

export default routes
