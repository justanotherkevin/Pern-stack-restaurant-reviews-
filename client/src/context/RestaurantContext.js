import React, { createContext, useState } from 'react'

export const RestaurantContext = createContext();

export const RestaurantcontextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const addRestaurant = restaurant => {
    setRestaurants([...restaurants, restaurant])
  }
  return (
    <RestaurantContext.Provider value={{
      restaurants,
      setRestaurants,
      addRestaurant
    }}>
      {props.children}
    </RestaurantContext.Provider>
  )
}
