import React, { Component } from 'react'
import { Button, Form, Container, Header, Message } from 'semantic-ui-react'

import axios from 'axios'
import AppHeader from './Header'

class ItemDetail extends Component {
  constructor () {
    super()
    this.state = {
      item: {
        name: '',
        category: '',
        price: Number
      },
      errorName:'',
      errorCategory:'',
      errorPrice:''
    }

    this.getItemById = this.getItemById.bind(this)
    this.removeItemById = this.removeItemById.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleSubmit2 = this.handleSubmit2.bind(this)
  }
  componentWillMount () {
    if(this.props.match.params.type == 'edit'){
      this.getItemById(this.props.match.params.itemId)
    }
  }

  getItemById (itemId) {
    axios.get('http://localhost:3000/itemById?id='+itemId)
        .then(response => this.setState({item: response.data}))
        //.then(response => console.log(response))
  }

  removeItemById (e, itemId) {
    e.preventDefault()
  	e.stopPropagation()
    axios.get('http://localhost:3000/item/delete?id='+itemId)
        .then(response => this.props.history.push('/items'))
  }

  validateFields(name, category, price){
    let hasErrors = false
      if(name.length <= 3) {
        this.setState({errorName:'Item Name must be larger then 3 chars'})
        hasErrors = true
      } else {
        this.setState({errorName:''})
      }

      if(category.length <= 3) {
        this.setState({errorCategory:'Item Category must be larger then 3 chars'})
        hasErrors = true
      } else {
        this.setState({errorCategory:''})
      }
      
      if(price!=Number) {
        this.setState({errorPrice:'Price must be in correct format'})
        hasErrors = true
      } else {
        this.setState({errorPrice:''})
      }
    return hasErrors
  }

  handleSubmit(e) {
    e.preventDefault()
  	e.stopPropagation()
    let name = e.target.name.value
    let category = e.target.category.value
    let price = e.target.price.value
    let hasErrors = this.validateFields(name,category,price)

    if(!hasErrors){
    if(this.props.match.params.type == 'edit'){
      axios.post('http://localhost:3000/item/update', {item: {
        'id': this.props.match.params.itemId,
        'name': name,
        'category': category,
        'price': price
      }}).then(response => this.props.history.push('/items'))
    } else {
      axios.post('http://localhost:3000/item/create', {item: {
        'name': name,
        'category': category,
        'price': price
      }}).then(response => this.props.history.push('/items'))
    }
  }}


  handleChange(event, field) {
    switch (field) {
      case 'name':
      this.setState(
        {item: {
          name: event.target.value,
          category: this.state.item.category,
          price: event.target.price
        }});
        break;
      case 'category':
        this.setState(
          {item: {
            name:  this.state.item.name,
            category: event.target.value,
            price: event.target.price
          }});
        break;
      case 'price':
          this.setState(
            {item: {
              name:  this.state.item.name,
              category: this.state.item.category,
              price: event.target.value
            }});
          break;
      default:
      this.setState(
        {item: {
          name: this.state.item.name,
          category: this.state.item.category,
          price: event.target.price
        }});
        break;
    }
  }

  renderEdit(){
    if (this.props.match.params.type== 'edit') {
      return (
        <span>
        <Button type='submit'>Edit Submit</Button>
          <Button primary className='button' onClick={(e) =>{if(confirm('Delete item?'))
          {this.removeItemById(e, this.state.item.id)};}}>Remove Item</Button>
        </span>
      );
    }
    else {
      return (
        <Button type='submit'>Create New Item</Button>
      )
    }
  }

  render () {
      return (
        <Container>
        <AppHeader />
         <Header as='h3'>Item detail page: {this.state.item.name}</Header>
         <Form onSubmit={this.handleSubmit}>
         <Form.Field>
          <label>
            Item Name:
            <input type="text" name="name" required={true} value={this.state.item.name} onChange={(e) => this.handleChange(e, 'name')} />
          </label>
          {this.state.errorName &&
            <Message
              color='red'
              header="Item Name field error"
              content={this.state.errorName}
            />
          }
          </Form.Field>
          <Form.Field>
           <label>
             Item Category:
             <input type="text" category="category" required={true} value={this.state.item.category} onChange={(e) => this.handleChange(e, 'category')} />
           </label>
           {this.state.errorCategory &&
             <Message
               color='red'
               header="Category Name field error"
               content={this.state.errorCategory}
             />
           }
           </Form.Field>
           <Form.Field>
            <label>
              Item Price:
              <input type="number" price="price" required={true} value={this.state.item.price} onChange={(e) => this.handleChange(e, price)} />
            </label>
            {this.state.errorPrice &&
              <Message
                color='red'
                header="Price format error"
                content={this.state.errorPrice}
              />
            }
            </Form.Field>
          <br/>

          { this.renderEdit() }
         </Form>

          <br/>
          <br/>
        </Container>
     )
   }
 }
 export default ItemDetail
