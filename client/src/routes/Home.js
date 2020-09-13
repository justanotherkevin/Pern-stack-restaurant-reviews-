import React from 'react'
import { Container } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'
import AddNewRestaurant from '../components/AddNewRestaurant'
import RestaurantsTable from '../components/RestaurantsTable'

export default function Home() {
  return (
    <Container>
      <PageHeader/>
      <AddNewRestaurant/>
      <RestaurantsTable/>
      <div>home</div>
    </Container>
  )
}
