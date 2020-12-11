import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import Adoption from '../Adoption/Adoption'

function Root() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/adoption' component={Adoption} />
        </Switch>
      </main>
    </>
  )
}

export default Root