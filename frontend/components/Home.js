import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './Header'

class Home extends Component {

    render () {
      return (
        <Container>
          <div>
            <Header />
            </div>
       </Container>
     )
   }
 }
 export default Home
