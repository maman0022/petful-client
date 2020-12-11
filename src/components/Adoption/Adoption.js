import React from 'react'
import AddNameForm from '../AddNameForm/AddNameForm'
import PetInfo from '../PetInfo/PetInfo'

function Adoption(props) {
  return (
    <section>
      <ol>
        <li>John Doe</li>
        <li>Jane Doe</li>
      </ol>
      <AddNameForm />
      <PetInfo />
    </section>
  )
}

export default Adoption