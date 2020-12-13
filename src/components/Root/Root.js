import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import Adoption from '../Adoption/Adoption'

function Root() {
  return (
    <>
      <Header />
      <main className='flex-column align-center'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/adoption' component={Adoption} />
        </Switch>
      </main>
    </>
  )
}

export default Root