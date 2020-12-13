import React from 'react'
import './PetList.css'

function PetList(props) {
  const cat = props.sharedState.pets.cats ? props.sharedState.pets.cats[0] : null
  const dog = props.sharedState.pets.dogs ? props.sharedState.pets.dogs[0] : null

  function handleAdopt(e) {
    removeName()
    const pets = props.sharedState.pets
    switch (e.currentTarget.id) {
      case 'cat':
        pets.cats.splice(0, 1)
        props.dispatch({ type: 'addpets', data: pets })
        break
      case 'dog':
        pets.dogs.splice(0, 1)
        props.dispatch({ type: 'addpets', data: pets })
        break
      case 'both':
        pets.cats.splice(0, 1)
        pets.dogs.splice(0, 1)
        props.dispatch({ type: 'addpets', data: pets })
        break
      default:
        break
    }
  }

  function removeName() {
    const people = props.sharedState.people
    people.splice(0, 1)
    props.dispatch({ type: 'addpeople', data: people })
    props.dispatch({ type: 'setuser', data: false })
  }

  return (
    <>
      <section className='flex-column pet'>
        <h3>Current Cat for Adoption</h3>
        {cat &&
          <>
            <img src={cat.imageURL} alt='cat'></img>
            <dl>
              <dt>Name:</dt>
              <dd>{cat.name}</dd>
              <dt>Age:</dt>
              <dd>{cat.age}</dd>
              <dt>Breed:</dt>
              <dd>{cat.breed}</dd>
              <dt>Gender:</dt>
              <dd>{cat.gender}</dd>
              <dt>Description:</dt>
              <dd>{cat.description}</dd>
              <dt>Story:</dt>
              <dd>{cat.story}</dd>
            </dl>
          </>
        }
        {props.sharedState.userAtTop && <button className='adopt-btn' id='cat' onClick={handleAdopt}>Adopt Cat</button>}
      </section>
      <section className='flex-column pet'>
        <h3>Current Dog for Adoption</h3>
        {dog &&
          <>
            <img src={dog.imageURL} alt='dog'></img>
            <dl>
              <dt>Name:</dt>
              <dd>{dog.name}</dd>
              <dt>Age:</dt>
              <dd>{dog.age}</dd>
              <dt>Breed:</dt>
              <dd>{dog.breed}</dd>
              <dt>Gender:</dt>
              <dd>{dog.gender}</dd>
              <dt>Description:</dt>
              <dd>{dog.description}</dd>
              <dt>Story:</dt>
              <dd>{dog.story}</dd>
            </dl>
          </>
        }
        {props.sharedState.userAtTop &&
          <div className='flex-row justify-between'>
            {props.sharedState.userAtTop && <button className='adopt-btn' id='dog' onClick={handleAdopt}>Adopt Dog</button>}
            {props.sharedState.userAtTop && <button className='adopt-btn' id='both' onClick={handleAdopt}>Adopt Both</button>}
          </div>
        }
      </section>
    </>
  )
}

export default PetList