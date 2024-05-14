import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

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

// Test API endpoint
app.get('/test', (req, res) => {
     res.send('Hello, world!');
});

// MongoDB connection
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

mongoose.connect(mongoUrl, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
}).then(() => {
     console.log('MongoDB connected successfully');
}).catch((error) => {
     console.error('MongoDB connection error:', error);
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
