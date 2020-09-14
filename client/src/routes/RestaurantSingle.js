import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { getRestaurant } from '../apis/Restaurant'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardRestaurant from '../components/CardRestaurant'
import RestaurantForm from '../components/RestaurantForm'

export default function Restaurantsingle() {
  const {id} = useParams()
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  useEffect(() =>{
    getRestaurant(id).then( data => {
      const {restaurant} = data
      setName(restaurant.name)
      setLocation(restaurant.location)
      setPriceRange(restaurant.price_range)
    })
  }, [])

  return (
    <Container>
      <h1>Restaurant</h1>
      <CardRestaurant
        header={name}
        description={location}
        price={priceRange}
      />
      <RestaurantForm
        name={name}
        location={location}
        priceRange={priceRange}
      />
    </Container>
  )
}
