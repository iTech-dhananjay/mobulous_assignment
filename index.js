import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

import mongoose from 'mongoose';
import dotenv from 'dotenv';

(async () => {
     dotenv.config();
     try {
          const mongoUrl = process.env.MONGODB_URI;
          mongoose.connect(mongoUrl);
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






/*
  To utilize Docker and docker-compose.yml, 
  simply execute `docker-compose up` 
  in your project directory to start all defined services.
*/



app.listen(3002, function () {
     console.log(`listening on 3002`);
});
