import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { getRestaurant, updateRestaurant } from '../apis/Restaurant';
import CardRestaurant from '../components/CardRestaurant';
import RestaurantForm from '../components/RestaurantForm';

export default function Restaurantsingle() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    getRestaurant(id).then((data) => {
      const { restaurant } = data;
      setName(restaurant.name);
      setLocation(restaurant.location);
      setPriceRange(restaurant.price_range);
    });
  }, [id]);
  const onRestaurantUpdate = (restaurantData) => {
    const formBody = { ...restaurantData, id };

    updateRestaurant(formBody).then((data) => {
      if (data.status === 200) {
        const { name, location, price_range } = data.restaurant;
        setName(name);
        setLocation(location);
        setPriceRange(price_range);
      }
    });
  };

  return (
    <Container>
      <h1>Restaurant</h1>
      {name && location && priceRange && (
        <CardRestaurant
          header={name}
          description={location}
          price={priceRange}
        />
      )}
      <RestaurantForm
        name={name}
        location={location}
        price={priceRange}
        onUpdate={onRestaurantUpdate}
      />
    </Container>
  );
}
