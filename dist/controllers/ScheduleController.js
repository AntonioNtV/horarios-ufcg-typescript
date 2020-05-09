"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class ScheduleController {
   async index (req, res) {
    return res.json({ status: 'building' })
  }
}

exports. default = new ScheduleController()
