import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from "./config.js";

dotenv.config();

const connectToDB = async () => {
     try {
          await mongoose.connect(config.db_uri, {})
          console.log(config.db_uri,'Database Connected');
     }catch (e) {
          console.log(e);
          process.exit(1)
     }
}

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import routers
import users from './router/user.js';
import product from './router/product.js';
import warehouse from './router/warehouse.js';
import orders from './router/order.js';
import aggregate from './router/aggregationService.js';

// Routes
app.use('/users', users);
app.use('/products', product);
app.use('/warehouse', warehouse);
app.use('/orders', orders);
app.use('/aggregate', aggregate);

await connectToDB();

// Test API endpoint
app.get('/test', (req, res) => {
     res.send('Hello, world!');
});

// Start the server
const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});



/*
Docker implementation logs - https://www.zacfukuda.com/blog/docker-compose-nodejs-mongodb-2024
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
