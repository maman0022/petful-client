import React, { useState } from 'react'
import config from '../../config'
import './AddNameForm.css'

function AddNameForm(props) {
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.name.value
    if (!name || name.trim() === '') {
      return setError('Name cannot be blank')
    }
    fetch(`${config.BASE_API_URL}/people`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name }) })
      .then(async res => {
        if (!res.ok) {
          throw new Error((await res.json()).message)
        }
        props.setAdding(false)
        props.setPeople([...props.people, name])
        setError(false)
      })
      .catch(error => setError(error.message))
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