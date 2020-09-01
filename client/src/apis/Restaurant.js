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
    return err
  }
}