import { useState } from 'react'
import CSEcomponent from './Components/csecomponent'
import ECEcomponent from './Components/ECEcomponent'
import './App.css'

function App() {
  const [department, setDepartment] = useState('')

  const handleSelectChange = (e) => {
    setDepartment(e.target.value)
  }

  return (
    <div id="title" >
      <h1>SETHU INSTITUTE OF TECHNOLOGY</h1>
      <h1>GPA CALCULATOR</h1>
      DEPARTMENT :  
      <select onChange={handleSelectChange}>:
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
      </select>

      {department === 'CSE' && <CSEcomponent/>  }
      {department === 'ECE' && <ECEcomponent/>  } 
    </div>

  )
}

export default App
