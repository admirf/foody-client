import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class Header extends Component {

    render () {
      return (
        <Menu inverted>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/items">Items</Link>
          </Menu.Item>

        <Menu.Item position='right'>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
          <Link to="/signup">Signup</Link>
          </Menu.Item>
        </Menu.Item>
       </Menu>
     )
   }
 }
 export default Header
