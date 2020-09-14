import React from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react'

export default function RestaurantForm(props) {
  const {
    name,
    location,
    priceRange,
    genderOptions,
    handleSubmit,
    nameChange,
    locationChange,
    optionChange
  } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label="Name"
          placeholder='Name'
          required
          value={name}
          onChange={ e => props.nameChange(e) }
        />
        <Form.Field
          id='form-input-control-location'
          control={Input}
          label='Location'
          placeholder='Location'
          value={location}
          required
          onChange={ e => props.locationChange(e) }
        />
        <Form.Field
          control={Select}
          options={genderOptions}
          label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
          placeholder='Gender'
          search
          searchInput={{ id: 'form-select-control-gender' }}
          onChange={ (e,data) => optionChange(data.value) }
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
