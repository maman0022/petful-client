import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <header>
      <Link to='/'><h1>Petful</h1></Link>
    </header>
  )
}

export default Header