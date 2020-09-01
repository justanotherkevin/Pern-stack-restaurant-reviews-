require('dotenv').config()

const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const { request } = require('express');

const db = require("./db")
const restaurantController = require('./controllers/restaurantsController');

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.get(    "/api/v1/restaurants",        restaurantController.index);
app.get(    "/api/v1/restaurants/:id",    restaurantController.single);
app.post(   "/api/v1/restaurants",        restaurantController.create);
app.put(    "/api/v1/restaurants/:id",    restaurantController.update);
app.delete( "/api/v1/restaurants/:id",    restaurantController.delete);





app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});