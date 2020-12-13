import React from 'react'
import happy from './happy.jpg'
import './LandingPage.css'

function LandingPage(props) {
  function handleStartClick() {
    props.history.push('/adoption')
  }

  return (
    <section id='lp-section' className='flex-column align-center justify-center'>
      <h2>Hello Pet Lover,</h2>
      <p>If you want to adopt a dog or cat, you're in the right place.</p>
      <img src={happy} alt='woman holding a dog'></img>
      <p>We work strictly on a first-come, first-serve basis.</p>
      <p>As we get pets in, we put them up for adoption in the order they were received.</p>
      <p>Once you start the process, you will be put into a queue.</p>
      <p>When it is your turn, you will have the option to adopt the current dog, cat, or both.</p>
      <p>To get started, click the button below.</p>
      <button onClick={handleStartClick}>Find the perfect pet!!!</button>
    </section>
  )
}

export default LandingPage