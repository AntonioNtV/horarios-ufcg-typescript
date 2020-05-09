import { Request, Response } from 'express'

class SchedulesController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json({ status: 'building' })
  }
}

export default new SchedulesController()
