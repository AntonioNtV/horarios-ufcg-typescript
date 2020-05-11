import mongoose from 'mongoose'
import Schedule from '../../src/models/Schedule'
import ImportScheduleService from '../../src/services/ImportScheduleService'

describe('Import', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('MongoDB server not initialized')
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  beforeEach(async () => {
    await Schedule.deleteMany({
    })
  })

  it('should import schedule', () => {
    ImportScheduleService.run()

    const schedules = Schedule.find({
    }).lean()

    console.log(schedules)

    expect(schedules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: '1307169'
        })
      ])
    )
  })
})
