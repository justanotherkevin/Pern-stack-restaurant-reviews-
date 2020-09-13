import axios from "axios";

const ApiBase = () => axios.create({
  baseURL: "http://localhost:3030/api/v1/restaurants",
});

export const fetchAllRestaurants = async () => {
  try {
    const res = await ApiBase().get('/')
    return {
      status: res.status,
      restaurants: res.data.data.restaurants,
      count: res.data.results
    }
  } catch(err) {
    console.log(err)
    return err
  }
}
export const createRestaurant = async reqBody => {
  try {
    const res = await ApiBase().post("/", reqBody)
    return {
      status: res.status,
      restaurant: res.data.data.restaurant
    }
  } catch(err) {
    console.log(err)
    return err
  }
}