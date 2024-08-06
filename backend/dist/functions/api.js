const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Routes
router.use('/auth', require('../../routes/auth'));
router.use('/jobs', require('../../routes/jobs'));

app.use('/.netlify/functions/api', router);

// Export the app as a serverless function
module.exports.handler = serverless(app);
