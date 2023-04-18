import React from 'react'
import ReactDOM from 'react-dom'

// Importation des éléments du dossier "pages"
import Home from './pages/Home'
import Propos from './pages/A-Propos'
import Logement from './pages/Logement'

// Importation des éléments du dossier "components"
import Header from  './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Montserrat', sans-serif;
  }
  body {
      margin: 0;
      padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
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
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
