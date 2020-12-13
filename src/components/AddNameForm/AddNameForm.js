import React, { useState } from 'react'
import faker from 'faker'
import './AddNameForm.css'

function AddNameForm(props) {
  const [error, setError] = useState(false)

  function setTimers(name) {
    const petInterval = setInterval(() => {
      const choices = ['dogs', 'cats']
      const random = Math.floor((Math.random() * 2))
      const animal = choices[random]
      const newPets = props.sharedState.pets
      newPets[animal].splice(0, 1)
      props.dispatch({ type: 'addpets', data: newPets })
    }, 5000)

    const peopleInterval = setInterval(() => {
      const people = props.sharedState.people
      if (people[0] === name) {
        clearInterval(petInterval)
      }
      else {
        people.splice(0, 1)
      }
      if (people[0] === name) {
        props.dispatch({ type: 'setuser', data: true })
      }
      if (people.length >= 5) {
        return clearInterval(peopleInterval)
      }
      const fakeName = faker.fake("{{name.firstName}} {{name.lastName}}")
      people.push(fakeName)
      props.dispatch({ type: 'addpeople', data: people })
    }, 4999)
    //set time slighly less than petInterval to fix bug where pet gets removed after name at the top
  }

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.name.value
    if (!name || name.trim() === '') {
      return setError('Name cannot be blank')
    }
    const people = props.sharedState.people
    people.push(name)
    props.setAdding(false)
    props.dispatch({ type: 'addpeople', data: people })
    setError(false)
    setTimers(name)
  }

  function handleCancel() {
    props.setAdding(false)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' id='name' required />
      {error && <h5 className='error-message'>{error}</h5>}
      <input type='reset' value='Cancel' onClick={handleCancel} />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddNameForm