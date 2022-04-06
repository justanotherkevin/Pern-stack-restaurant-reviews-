const express = require('express');
const db = require('../db');

const app = express();
// Get all Restaurants
exports.index = async function (req, res) {
  console.log('all restaurants');
  try {
    //const results = await db.query("select * from restaurants");
    const restaurantRatingsData = await db.query(
      // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
      'select * from restaurants;'
    );
    res.status(200).json({
      status: 'success',
      results: restaurantRatingsData.rows.length,
      data: {
        restaurants: restaurantRatingsData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Get a Restaurant
exports.single = async function (req, res) {
  console.log(req.params.id);
  try {
    const restaurant = await db.query(
      // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      'select * from restaurants WHERE id = $1;',
      [req.params.id]
    );
    // select * from restaurants wehre id = req.params.id

    // const reviews = await db.query(
    //   "select * from reviews where restaurant_id = $1",
    //   [req.params.id]
    // );
    // console.log(reviews);

    res.status(200).json({
      status: 'succes',
      data: {
        restaurant: restaurant.rows[0],
        // reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Create a Restaurant
exports.create = async function (req, res) {
  try {
    const results = await db.query(
      'INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *',
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: 'succes',
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Restaurants
exports.update = async function (req, res) {
  try {
    const results = await db.query(
      'UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *',
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: 'succes',
      data: {
        retaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Restaurant
exports.delete = async function (req, res) {
  try {
    const results = db.query('DELETE FROM restaurants where id = $1', [
      req.params.id,
    ]);
    res.status(204).json({
      status: 'sucess',
    });
  } catch (err) {
    console.log(err);
  }
};
