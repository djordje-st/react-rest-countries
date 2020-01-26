import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Navbar from './components/Navbar'
import Country from './views/Country'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const switchTheme = () => setDarkTheme(!darkTheme)

  return (
    <div className={'app ' + (darkTheme ? 'dark' : 'light')}>
      <Router>
        <Navbar switchTheme={switchTheme} theme={darkTheme} />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Country} />
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
