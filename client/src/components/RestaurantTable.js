import React, { useEffect, useContext } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import { fetchAllRestaurants } from '../apis/Restaurant'
import { RestaurantContext } from '../context/RestaurantContext'

export default function Restauranttable(props) {
  const {restaurants, setRestaurants} = useContext(RestaurantContext)
  useEffect(()=> {
    fetchAllRestaurants().then( data => {
      setRestaurants(data.restaurants)
    })
  },[])

  const restaurantkeys = restaurants.length > 0 ?
    Object.keys(restaurants[0]).filter( word => {
      return word != "id"
    }) :
    []

  const tableHeader = restaurantkeys.map( (header, index) => (
    <Table.HeaderCell key={`${header}_${index}`}>{header}</Table.HeaderCell>
  ))


  const tableBody = restaurants.map( (resaurant,index) => (
    <Table.Row key={`res_${index}_row`}>{
      restaurantkeys.map( (key,index) => {
        const componentKey = `res_${key}_${index}_cell`
        if (key === 'price_range') {
          return (
            <Table.Cell key={componentKey}>
              <Header as='h3' textAlign='center'>
                { "$".repeat(resaurant[key]) }
              </Header>
            </Table.Cell>
          )
        }
        return <Table.Cell key={componentKey}>{resaurant[key]}</Table.Cell>
      })
    }</Table.Row>
  ))

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          { tableHeader }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableBody}
        {/* <Table.Row>
          <Table.Cell>
            <Header as='h2' textAlign='center'>
              A
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>Power Output</Table.Cell>
          <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign='right'>
            80% <br />
            <a href='#'>18 studies</a>
          </Table.Cell>
          <Table.Cell>
            Creatine supplementation is the reference compound for increasing
            muscular creatine levels; there is variability in this increase,
            however, with some nonresponders.
          </Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}
