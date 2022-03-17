import Info from './Info'
import Thanks from './Thanks'
import ErrorPage from './ErrorPage'

const Form = (props) => {





  return (
    <div> 
      <Info 
      name={props.name} 
      email={props.email} 
      age={props.age} 
      incrementPage={props.incrementPage}
      handleChange={props.handleChange}
      />

    </div>
  )
}

export default Form
