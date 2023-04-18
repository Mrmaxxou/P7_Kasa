import React from 'react'
import ReactDOM from 'react-dom'

// Importation des éléments du dossier "pages"
import Home from './pages/Home'
import Propos from './pages/A-Propos'
import Logement from './pages/Logement'

// Importation des éléments du dossier "components"
import Header from  './components/Header'
import Error from './components/Error'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logement">
            <Logement />
          </Route>
          <Route path="/propos">
            <Propos />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
