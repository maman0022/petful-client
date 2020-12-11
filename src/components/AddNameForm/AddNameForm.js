import React from 'react'

function AddNameForm(props) {
  return (
    <form>
      <label htmlFor='fname'>First Name</label>
      <input type='text' name='fname' id='fname' required/>
      <label htmlFor='lname'>Last Name</label>
      <input type='text' name='lname' id='lname' required/>
      <input type='submit' defaultValue='Submit'/>
    </form>
  )
}

export default AddNameForm