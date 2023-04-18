import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'

import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route path="/">
          <Home />
        </Route>
        
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
