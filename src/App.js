import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Drivers from './layouts/Drivers'
import Constructors from './layouts/Constructors'
import Races from './layouts/Races'

class App extends Component {
  render() {
    return (
      <Router>
        <header className="px-4 pt-8 pb-16">
          <nav className="space-y-4 md:space-y-0 md:flex md:space-x-8 font-semibold text-xl">
            <Link to="/" className="block">Pilotes</Link>
            <Link to="/teams" className="block">Équipes</Link>
            <Link to="/races" className="block">Courses</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Drivers />
          </Route>
          <Route path="/teams">
            <Constructors />
          </Route>
          <Route path="/races">
            <Races />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    ) 
  }
}

export default App
