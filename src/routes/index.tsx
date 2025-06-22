import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import type { CandidatesType } from '@/types/candidates'
import Candidates from '@/components/candidates'

export const Route = createFileRoute('/')({
  component: App,
})

const data: CandidatesType[] = [
  {
    name: 'John Doe',
    age: 30,
    experience: 5,
    status: 'Pending',
    skills: ['JavaScript', 'TypeScript', 'React'],
    working: false
  },
  {
    name: 'Jane Doe',
    age: 25,
    experience: 3,
    status: 'Interviewing',
    skills: ['JavaScript', 'TypeScript', 'Angular'],
    working: true
  },
  {
    name: 'Bob Smith',
    age: 40,
    experience: 10,
    status: 'Pending',
    skills: ['JavaScript', 'TypeScript', 'React'],
    working: false
  },

]

function App() {
  return (
    <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
      {data.map((candidate, index) => (
        <Candidates
          key={index}
          {...candidate}
        />

      ))}

    </div>
  )
}
