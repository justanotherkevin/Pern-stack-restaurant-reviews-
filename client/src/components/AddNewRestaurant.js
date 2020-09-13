import React, { useState, useContext } from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react'
import { createRestaurant } from '../apis/Restaurant'
import { RestaurantContext } from '../context/RestaurantContext'

export default function Addnewrestaurant() {
  const genderOptions = [
    { key: '1', text: '$', value: 1 },
    { key: '2', text: '$$', value: 2 },
    { key: '3', text: '$$$', value: 3 },
    { key: '4', text: '$$$$', value: 4 },
    { key: '5', text: '$$$$$', value: 5 },
  ]
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const {addRestaurant} = useContext(RestaurantContext);
  const handleSubmmit = (event) => {
    event.preventDefault();
    if (!name && !location && !priceRange) return
    const formBody = {
      name,
      location,
      price_range: priceRange
    }
    createRestaurant(formBody).then( data => {
      addRestaurant(data.restaurant)
    })
  }

  return (
    <Form onSubmit={handleSubmmit}>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label="Name"
          placeholder='Name'
          required
          value={name}
          onChange={ e => setName(e.target.value) }
        />
        <Form.Field
          id='form-input-control-location'
          control={Input}
          label='Location'
          placeholder='Location'
          value={location}
          required
          onChange={ e => setLocation(e.target.value) }
        />
        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
          placeholder='Gender'
          search
          searchInput={{ id: 'form-select-control-gender' }}
          onChange={ (e,data) => {setPriceRange(data.value)} }
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
