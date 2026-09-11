import './App.css'
import Functionalcom from './component/functionalcom.jsx'
import GreetClass from './component/GreetClass'
import StudentCom from './component/studentCom.jsx'
import StudentClass from './component/StudentsClass'

function App() {
  return (
    <div>
      <Functionalcom name="Arun" />

      <StudentCom name="Kannan" course="IT" />

      <StudentCom name="Madhav" course="CS" />

      <StudentClass />

      {/* <GreetClass /> */}
    </div>
  )
}

export default App