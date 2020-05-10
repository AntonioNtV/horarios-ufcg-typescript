
class ImportScheduleService {
  async run (file: string): Promise<void> {
    console.log(file)
  }
}

export default new ImportScheduleService()
