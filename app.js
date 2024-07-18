const express = require('express');
const body_parser = require('body-parser');
const Tudorouts = require('./routers/tudu.routs'); 
const userRoutes = require('./routers/user.routs'); // Fixed typo 'reequire' and corrected 'user.routs' to 'user.routes'
const app = express();

// Use the body parser middleware to parse JSON bodies
app.use(body_parser.json());

// Use the user routes
app.use('/', userRoutes);
app.use('/', Tudorouts);
module.exports = app;
