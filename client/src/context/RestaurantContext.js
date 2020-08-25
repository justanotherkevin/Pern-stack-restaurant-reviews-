import React, { createContext, useState } from 'react'

const RestaurantContext = createContext();

export const RestaurantcontextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantContext.Provider value={ {restaurants} }>
      {props.children}
    </RestaurantContext.Provider>
  )
}
