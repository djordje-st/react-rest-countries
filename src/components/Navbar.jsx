import React from 'react'
import { Link } from 'react-router-dom'

import IosMoon from 'react-ionicons/lib/IosMoon'
import IosSunny from 'react-ionicons/lib/IosSunny'

const Navbar = ({ switchTheme, theme }) => {
  const text = theme ? 'Light Mode' : 'Dark Mode'

  const icon = theme ? <IosSunny color="white" /> : <IosMoon color="black" />

  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          Where in the world?
        </Link>
        <button onClick={() => switchTheme()} type="button">
          {icon} {text}
        </button>
      </div>
    </header>
  )
}

export default Navbar
