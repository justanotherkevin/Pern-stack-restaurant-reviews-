import React, { createContext, useState } from 'react'

export const RestaurantContext = createContext();

export const RestaurantcontextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantContext.Provider value={ {restaurants, setRestaurants} }>
      {props.children}
    </RestaurantContext.Provider>
  )
}
