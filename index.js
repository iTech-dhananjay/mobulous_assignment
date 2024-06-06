import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
// import errorHandler from './middleware/errorHandler.js';

// Configure dotenv
dotenv.config();

// Connect to database
await connectToDB();

const app = express();

// Middleware
app.use(express.json());
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

// Test API endpoint
app.get('/test', (req, res) => {
     res.send('Hello, world!');
});

// Error handling middleware
// app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
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