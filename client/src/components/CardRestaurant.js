
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardRestaurant = (props) => (
  <Card>
    <Card.Content header={props.header} />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Icon name='tag' />{props.price}
    </Card.Content>
  </Card>
)

export default CardRestaurant