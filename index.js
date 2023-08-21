const express = require('express');
const app = express();
const birds = require('./birds')

// const swaggerJSDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')

const Joi = require('joi'); //validate any data that gets sent to the api
app.use(express.json());


// app.listen(3003, () => console.log('Listening on port 3003')); 

app.use('/birds',birds)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));