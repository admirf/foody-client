import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import ItemGrid from './components/ItemGrid'
import ItemDetail from './components/ItemDetail'
import UserGrid from './components/UserGrid'
import UserDetail from './components/UserDetail'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

import { BrowserRouter, Route } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <Route
      render={props => (
          <div>
          <Route location={location} path='/' exact component={Home} />
          <Route location={location} path='/users' exact component={UserGrid} />
          <Route location={location} path='/user/:type/:userId?' exact component={UserDetail} />
          <Route location={location} path='/items' exact component={ItemGrid} />
          <Route location={location} path='/item/:type/:itemId?' exact component={ItemDetail} />
          <Route location={location} path='/login' exact component={LoginPage} />
          <Route location={location} path='/signup' exact component={SignupPage} />
          </div>
        )}
    />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'))
