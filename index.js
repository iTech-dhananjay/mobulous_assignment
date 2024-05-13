import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

import mongoose from 'mongoose';
import dotenv from 'dotenv';

(async () => {
     dotenv.config();
     try {
          const mongoUrl = process.env.MONGODB_URI.replace('127.0.0.1', 'mongo_db');
          console.log(mongoUrl);
          console.log('Database is connected successfully...........');
     } catch (error) {
          console.error('mongodb is not connected', error);
     }
})();



// import order from './router/order.js';
import users from './router/user.js';
import product from './router/product.js';
import warehouse from './router/warehouse.js';
import orders from './router/order.js';
import aggregate from './router/aggregationService.js';

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/order', order);
app.use('/users', users);
app.use('/products', product);
app.use('/warehouse', warehouse);
app.use('/orders', orders);
app.use('/aggregate', aggregate);

// Test API endpoint
app.get('/test', (req, res) => {
     res.send('Hello, world!');
   });




/*

1- ❯ docker-compose logs api
=> To run the dockerfile with docker-compose - docker-compose up
=> http://localhost:3002/test - check for url 

  To utilize Docker and docker-compose.yml, 
2-  simply execute `docker-compose up` 
  in your project directory to start all defined services.

3-  Restart Containers: After updating your docker-compose.yml file to set the MONGODB_URI environment variable correctly, make sure to restart your Docker containers using docker-compose up -d to apply the changes.
*/



app.listen(process.env.PORT, function () {
     console.log(`listening on 3002`);
});
