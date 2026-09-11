import { useState } from 'react'

export default function StudentCom({ name, course }) {
  const [studentName, setStudentName] = useState("")

  const showName = () => {
    setStudentName(name)
  }

  return (
    <div>
      <h1>Student Information</h1>

      <p>Name: {studentName}</p>
      <p>Course: {course}</p>

      <button onClick={showName}>Show Name</button>
    </div>
  )
}