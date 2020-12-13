import React, { useState } from 'react'
import './PeopleList.css'
import AddNameForm from '../AddNameForm/AddNameForm'

function PeopleList(props) {
  const [adding, setAdding] = useState(false)

  function handleAddName() {
    setAdding(true)
  }

  return (
    <section className='people'>
      <h3>People Currently in Line</h3>
      <ol>
        {props.sharedState.peopleError && <li className='error-message'>{props.sharedState.peopleError}</li>}
        {props.sharedState.people && props.sharedState.people.map((person, index) => <li key={index}>{person}</li>)}
      </ol>
      {!adding && <button onClick={handleAddName}>Click to Get in Line</button>}
      {adding && <AddNameForm setAdding={setAdding} sharedState={props.sharedState} dispatch={props.dispatch} />}
    </section>
  )
}

export default PeopleList