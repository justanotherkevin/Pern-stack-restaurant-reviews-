import React from 'react'
import { Container } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'
import AddNewRestaurant from '../components/AddNewRestaurant'
import Restauranttable from '../components/RestaurantTable'

export default function Home() {
  return (
    <Container>
      <PageHeader/>
      <AddNewRestaurant/>
      <Restauranttable/>
      <div>home</div>
    </Container>
  )
}
