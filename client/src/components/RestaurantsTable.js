import React, { useEffect, useContext } from 'react'
import { Header, Table, Rating, Checkbox, TableCell } from 'semantic-ui-react'
import { fetchAllRestaurants } from '../apis/Restaurant'
import { RestaurantContext } from '../context/RestaurantContext'
import { useHistory } from 'react-router-dom'

export default function RestaurantsTable(props) {
  const {restaurants, setRestaurants} = useContext(RestaurantContext)
  let history = useHistory()
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

  const tableHeader = (
    <Table.Row>
      { restaurantkeys.map( (name, index) => {
        let displayText = (name === 'price_range') ? "price range" : name
        return <Table.HeaderCell key={`${name}_${index}`}>{displayText}</Table.HeaderCell>
      })}
    </Table.Row>
  )
  const onRowClicked = id => {
    history.push(`/restaurant/${id}`)
  }
  const tableBody = restaurants.map( (resaurant,index) => (
    <Table.Row key={`res_${index}_row`} onClick={() => onRowClicked(resaurant['id'])} className="pointer">
      {restaurantkeys.map( (key,index) => {
        const componentKey = `res_${key}_${index}_cell`
        let cellBody = resaurant[key]

        if (key === 'price_range') {
          cellBody = <Header as='h3' textAlign='center'>{ "$".repeat(resaurant[key]) }</Header>
        }
        return <Table.Cell key={componentKey}>{cellBody}</Table.Cell>
      })}
    </Table.Row>
  ))
  return (
    restaurants.length > 0 ?
      <Table celled padded selectable>
        <Table.Header>{ tableHeader }</Table.Header>
        <Table.Body>{ tableBody }</Table.Body>
      </Table> :
      <h1>nothing</h1>
  )
}
