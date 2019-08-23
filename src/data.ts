export type Row = {
  id: string
  age: string
  answers: (number | null)[]
}

export type Rows = Row[]

export const rows: Rows = [
  {
    id: 'up20-up30',
    age: '20〜30歳',
    answers: [0.30, 0.20, 0.42, 0.18]
  },
  {
    id: 'up30-up40',
    age: '30〜40歳',
    answers: [0.12, 0.30, 0.40, 0.18]
  }
]
