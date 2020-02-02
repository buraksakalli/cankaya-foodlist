'use strict';

require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3001;

app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Swagger Address

const db = process.env.mongoURI;
mongoose.connect(db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const routes = require('./app/routes/index');
routes(app);

console.log(`🚀 Server is running on http://localhost:${port}00`);
app.listen(port);