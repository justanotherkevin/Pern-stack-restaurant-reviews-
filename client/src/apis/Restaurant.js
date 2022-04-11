import axios from 'axios';

const ApiBase = () =>
  axios.create({
    baseURL: 'http://localhost:3030/api/v1/restaurants',
  });

export const fetchAllRestaurants = async () => {
  try {
    const res = await ApiBase().get('/');
    return {
      status: res.status,
      restaurants: res.data.data.restaurants,
      count: res.data.results,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const createRestaurant = async (reqBody) => {
  try {
    const res = await ApiBase().post('/', reqBody);
    return {
      status: res.status,
      restaurant: res.data.data.restaurant,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getRestaurant = async (id) => {
  try {
    const res = await ApiBase().get(`/${id}`);
    return {
      status: res.status,
      restaurant: res.data.data.restaurant,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const updateRestaurant = async (reqBody) => {
  try {
    const res = await ApiBase().put(`/${reqBody.id}`, reqBody);
    return {
      status: res.status,
      restaurant: res.data.data.restaurant,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const deleteRestaurant = async (id) => {
  try {
    const res = await ApiBase().delete(`/${id}`);
    return {
      status: res.status,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
