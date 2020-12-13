import React, { useState, useEffect, useReducer } from 'react'
import config from '../../config'
import PetList from '../PetList/PetList'
import PeopleList from '../PeopleList/PeopleList'

function Adoption(props) {
  const [error, setError] = useState(null)
  const [sharedState, dispatch] = useReducer(reducer, {
    people: [],
    peopleError: false,
    pets: [],
    userAtTop: false
  })

  function reducer(state, action) {
    switch (action.type) {
      case 'addpeople':
        return { ...state, people: action.data }
      case 'addpets':
        return { ...state, pets: action.data }
      case 'peopleerror':
        return { ...state, peopleError: action.data }
      case 'setuser':
        return { ...state, userAtTop: action.data }
      default:
        break;
    }
  }

  useEffect(() => {
    fetch(`${config.BASE_API_URL}/people`)
      .then(async res => {
        if (!res.ok) {
          throw new Error((await res.json()).message)
        }
        dispatch({ data: await res.json(), type: 'addpeople' })
      })
      .catch(error => dispatch({ type: 'peopleerror', data: error.message }))

    fetch(`${config.BASE_API_URL}/pets`)
      .then(async res => {
        if (!res.ok) {
          throw new Error((await res.json()).message)
        }
        dispatch({ data: await res.json(), type: 'addpets' })
      })
      .catch(error => setError(error.message))
  }, [])

  return (
    <section className='flex-row flex-wrap justify-center'>
      {error && <h5 className='error-message'>{`An error occured: ${error}`}</h5>}
      <PetList sharedState={sharedState} dispatch={dispatch} />
      <PeopleList sharedState={sharedState} dispatch={dispatch} />
    </section>
  )
}

export default Adoption