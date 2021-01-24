import fs from 'fs'

export abstract class CsvFileReader<Tao> {
  data: Tao[] = []

  constructor(public filename: string) { }
  abstract mapRow(row: string[]): Tao;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      }).split('\n').map((row: string): string[] => {
        return row.split(',')
      }).map(this.mapRow)
  }
}
