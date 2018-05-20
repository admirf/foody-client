import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import Header from './Header'
import axios from 'axios'

class ItemGrid extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/items')
        .then(response => this.setState({items: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({items: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let name = event.target.name.value
   console.log(name)
  axios.get('http://localhost:3000/itemByName?name='+ name, { "name" : name } )
     .then(response => this.setState({items: response.data}))
 }

  render () {
    return (
      <Container>
      <Header />
       <Button primary className='button' onClick={this.handleClick}>Show all items</Button>
       <Button secondary><Link to={'/item/create'}>Create New Item</Link></Button>
       <br/><br/>
       <Form onSubmit={this.handleSubmit}>
        <Form.Field>
         <label htmlFor="name">Enter item to search</label>
         <input id="name" type="text" name="name" />
        </Form.Field>
         <Button type='submit'>Filter by Category</Button>
       </Form>
       <br/>
       <Table>
        <Table.Header>
         <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Item Name</Table.HeaderCell>
          <Table.HeaderCell>Item Category</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
         </Table.Row>
        </Table.Header>
        <Table.Body>
         { this.state.items.map((item, key) => {
                   return (
                      <Table.Row key={key}>
                      <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.catrgory}</Table.Cell>
                        <Table.Cell>{item.price}</Table.Cell>
                        <Table.Cell><Link to={'/item/edit/'+item.id}>edit</Link></Table.Cell>
                      </Table.Row>
                    )
                   })
         }
         </Table.Body>
        </Table>
       </Container>
    )
  }
}
export default ItemGrid
