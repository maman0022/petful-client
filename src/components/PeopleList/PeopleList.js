import React from 'react'
import './PeopleList.css'

function PeopleList(props) {
  function handleAddName() {
    props.setAdding(true)
  }

  return (
    <>
      <h3>People currently in line</h3>
      <ol>
        {props.error && <li className='error-message'>{props.error}</li>}
        {props.people && props.people.map((person, index) => <li key={index}>{person}</li>)}
      </ol>
      {!props.adding && <button onClick={handleAddName}>Click to Get in Line</button>}
    </>
  )
}

export default PeopleList