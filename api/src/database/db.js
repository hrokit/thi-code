const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = () => {
  console.log('Wait connection to db');

  mongoose
    .connect(
      'mongodb+srv://root:admin@cluster0.ziccd5y.mongodb.net/thi-code?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MondoDB Atlas connected'))
    .catch(error => console.log(error));
};

module.exports = connectDB;
