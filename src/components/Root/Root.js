import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'

function Root() {
  return (
    <>
      <main>
        <Route exact path='/' component={LandingPage} />
      </main>
    </>
  )
}

export default Root