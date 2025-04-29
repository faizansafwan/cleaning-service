// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// const bookingRoutes = require('./routes/bookingRoutes');
const sequelize = require('./database/db.js');
const userRouter = require('./routes/UserRoutes.js');
const bookingRouter = require('./routes/BookingRoutes.js');
const serviceRouter = require('./routes/ServiceRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", userRouter);
app.use('/booking', bookingRouter);
app.use('/service', serviceRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
