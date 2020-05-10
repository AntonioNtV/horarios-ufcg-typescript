class ImportScheduleService {
  public run (): void {
    console.log('run')
  }

  private exportToMongo (): void {
    console.log('export to mongo')
  }
}

export default new ImportScheduleService()
