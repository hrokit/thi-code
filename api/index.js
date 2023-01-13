import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/db.js';
import userRoute from './src/routes/user.route.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/user', userRoute);

app.listen(port, () => console.log(`server OK, port ${port}`));
