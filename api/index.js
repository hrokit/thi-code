const express = require('express');
const connectDB = require('./src/database/db');
const userRoute = require('./src/routes/user.route');

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/user', userRoute);

app.listen(port, () => console.log(`server OK, port ${port}`));
