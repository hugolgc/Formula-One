import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Drivers from './layouts/Drivers'
import Constructors from './layouts/Constructors'
import Races from './layouts/Races'

class App extends Component {
  render() {
    return (
      <Router>
        <header className="pt-8 pb-16">
          <nav className="space-x-8 font-semibold text-xl">
            <Link to="/">Pilotes</Link>
            <Link to="/teams">Équipes</Link>
            <Link to="/races">Courses</Link>
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
