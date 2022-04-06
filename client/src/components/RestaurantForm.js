import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'semantic-ui-react';
import { updateRestaurant } from '../apis/Restaurant';
import { useParams } from 'react-router-dom';

const priceOptions = [
  { key: '1', text: '$', value: 1 },
  { key: '2', text: '$$', value: 2 },
  { key: '3', text: '$$$', value: 3 },
  { key: '4', text: '$$$$', value: 4 },
  { key: '5', text: '$$$$$', value: 5 },
];

export default function RestaurantForm(props) {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmmit = (event) => {
    event.preventDefault();
    if (!name && !location && !price)
      throw new Error('Please fill in all the fields');

    const formBody = {
      id,
      name,
      location,
      price_range: price,
    };

    updateRestaurant(formBody).then((data) => {
      console.log(data);
      // addRestaurant(data.restaurant);
    });
  };
  useEffect(() => {
    if (props.name !== name) {
      setName(props.name);
    }
    if (props.location !== location) {
      setLocation(props.location);
    }
    if (props.price !== price) {
      setPrice(props.price);
    }
  }, [props.name, props.location, props.price]);

  return (
    <Form onSubmit={handleSubmmit} loading={!name && !location && !price}>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Name'
          placeholder='Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Field
          id='form-input-control-location'
          control={Input}
          label='Location'
          placeholder='Location'
          value={location}
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <Form.Field
          control={Select}
          options={priceOptions}
          label={{ children: 'Price', htmlFor: 'form-select-control-price' }}
          placeholder='Price'
          value={price}
          search
          searchInput={{ id: 'form-select-control-price' }}
          onChange={(e, data) => setPrice(data.value)}
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}
