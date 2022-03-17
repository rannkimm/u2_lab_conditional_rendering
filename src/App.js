import './styles/App.css'
import { useState } from 'react'
import Form from './components/Form'
import LandingPage from './components/LandingPage'



const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })


  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and set's it to the inputs value
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)



    
  }

  console.log(currentPage)

  return (
  
    <div className="App">
        <LandingPage incrementPage={incrementPage}/>
      <Form
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        handleChange={handleChange}
      />
    </div>
  )
}

export default App
