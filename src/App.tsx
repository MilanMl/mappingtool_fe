import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, AboutPage, NotFoundPage } from './pages'
import { Navigation } from './components/shared'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App
