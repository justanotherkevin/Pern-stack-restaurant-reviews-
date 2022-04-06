# database setup
# postgreSQL.
https://www.postgresqltutorial.com
connect to postgre
`psql`
show all database
`\l`
create database
`CREATE DATABASE practice001;`
switch to database
`\connect practice001`
or
`\c practice001`
how to create a table
https://www.postgresqltutorial.com/postgresql-create-table/
```
CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  prce INT,
  on_sale boolean
)
```
how to see all tables
`\d`

how to see details on a table regarding the keys
`\d products`

how to see row from a table ?
`SELECT * FROM products;`

how to add a column into a table
`ALTER TABLE products ADD COLUMN featured boolean;`

how to drop a column from a table
`ALTER TABLE products DROP COLUMN featured boolean;`

how to drop a table
`DROP TABLE products;`

**App tables:**
table name is plural
```
CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  prce INT,
  on_sale boolean
);

CREATE TABLE restarunts (
  id INT,
  name VARCHAR(50),
  location VARCHAR(50),
  price_range INT
);

INSERT INTO restarunts (
  id, name, location, price_range
) values (
  123, 'mcdonalds', 'new york', 3
);

INSERT INTO restarunts (
  id, name, location, price_range
) values (
  124, 'mcdonalds_2', 'new york', 4
);

```

ALTER TABLE restaurants
ADD PRIMARY KEY (id);

if after instered, terminal show `INSERT 0 1` means that it worked
To make sure, check the row: `SELECT * FROM restarunts;`


```
CREATE TABLE restaurants (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR(50) NOT NULL,
  locaton VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

ALTER TABLE restaurants
ADD PRIMARY KEY (id);
```


```
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
```
```
select *
from restaurants
    left join(
        select restaurant_id,
            count(*),
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;
```


init package.json file
`yarn init -y`

install express
`yarn add express`

create server.js file
`touch server.js`

import express app
`const express = require('express');`

create the instance of express app

have app listen to a port
  * create a fallback after the listen success

run server.js with node
`node server.js`

how to add/manage ENV variables dotenv
`yarn add dotenv`
`touch .env`
```
# /.env
PORT=3030

# /server.js
const port == process.env.PORT
```

how to create a route with express?
`app.get('/someroute', (req, res) => { console.log })`

how to stop resrtatign server with change to server.js file?
`nodemon`

how to send back a json object when hitting the route?
```
app.get('/someroute', (req, res) => {
  res.json({
    status: 'success',
    somekey: 'some value'
  })
})
```

how to send back a *satus code* with express?
`app.get('/someroute', (req, res) => { res.status(404) })`


how to use call express middleware
```
app.use( (req,res,next) => {
  console.log('hi from middleware')
  next();
})
```
how to handle post request with json body object?
`app.use(express.json())`

express route handerler?


why is the placement(where it definded) of middlewear important?

link to morgan. https://expressjs.com/en/resources/middleware/morgan.html

popular middlware. morgan `yarn add morgan`

how to use morgan?
`app.use(morgan('tiny'))` or
`app.use(morgan('dev'))`

express with postgres, `node-postgres`
https://node-postgres.com/

adding posgres into node with `yarn add pg`









