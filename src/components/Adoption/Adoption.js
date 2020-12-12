import React, { useState, useEffect } from 'react'
import config from '../../config'
import AddNameForm from '../AddNameForm/AddNameForm'
import PetInfo from '../PetInfo/PetInfo'
import PeopleList from '../PeopleList/PeopleList'

function Adoption(props) {
  const [adding, setAdding] = useState(false)
  const [people, setPeople] = useState([])
  const [peopleError, setPeopleError] = useState(false)
  const [pets, setPets] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${config.BASE_API_URL}/people`)
      .then(async res => {
        if (!res.ok) {
          throw new Error((await res.json()).message)
        }
        setPeople(await res.json())
      })
      .catch(error => setPeopleError(error.message))

    fetch(`${config.BASE_API_URL}/pets`)
      .then(async res => {
        if (!res.ok) {
          throw new Error((await res.json()).message)
        }
        setPets(await res.json())
      })
      .catch(error => setError(error.message))
  }, [])

  return (
    <section>
      <PeopleList people={people} setPeople={setPeople} error={peopleError} setAdding={setAdding} adding={adding} />
      {adding && <AddNameForm setAdding={setAdding} people={people} setPeople={setPeople} />}
      <PetInfo />
    </section>
  )
}

export default Adoption