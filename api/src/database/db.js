import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = () => {
  console.log('Wait connection to db');

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MondoDB Atlas connected'))
    .catch(error => console.log(error));
};

export default connectDB;
