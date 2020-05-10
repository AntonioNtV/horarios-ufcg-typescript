import mongoose from 'mongoose'
import Schedule from '../../src/models/Schedule'

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
    await Schedule.deleteMany({})
  })

  it('should import all schedule from a certain .csv file', async () => {
    console.log('it should import all schedule from a certain .csv file')
  })
})
