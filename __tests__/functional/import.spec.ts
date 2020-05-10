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

  it('should import all schedule from a certain .csv file', async () => {
    await ImportScheduleService.run('data.csv')

    const schedules = Schedule.find({
    })

    const linguaPortuguesa = {
      name: 'lingua-portuguesa',
      classroom: 'bg-106',
      discipline: 'lingua-portuguesa',
      class: 't2',
      teacher: '?',
      category: 'opt-geral',
      newPPCperiod: '*',
      oldPPCperiod: '*',
      day: 'quarta',
      hour: '08'
    }

    const direitoCidadania = {
      name: 'direito-e-cidadania',
      classroom: 'bg-201',
      discipline: 'direito-e-cidadania',
      class: 't1',
      teacher: '?',
      category: 'opt-geral',
      newPPCperiod: '*',
      oldPPCperiod: '*',
      day: 'sexta',
      hour: '08'
    }

    expect(schedules).toEqual([
      expect.objectContaining(linguaPortuguesa),
      expect.objectContaining(direitoCidadania)
    ])
  })
})
