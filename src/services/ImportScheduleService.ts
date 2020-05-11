import SchedulesData from '../data/SchedulesData'
import Schedule from '../models/Schedule'
import ScheduleData from './structures/ScheduleData'

class ImportScheduleService {
  public run (): void {
    this.importToMongo(SchedulesData.data)
  }

  private async importToMongo (schedules: Array<ScheduleData>): Promise<void> {
    const formattedSchedules = schedules.map(this.parseToMongoFormat)

    formattedSchedules.forEach(schedule => {
      Schedule.create(schedule)
    })
  }

  private parseToMongoFormat (obj: ScheduleData): object {
    const { periodo, codigo, turma, disciplina, horarios } = obj

    const period = periodo === '' ? 'N/D' : periodo

    if (!horarios) {
      console.log(horarios)
    }

    return {
      code: codigo,
      name: disciplina,
      class: turma,
      period: period,
      schedule: horarios
    }
  }
}

export default new ImportScheduleService()
