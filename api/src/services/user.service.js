const User = require('../models/User.model');

const createService = body => User.create(body);

const findAllService = () => User.find();

const findByIdService = id => User.findById(id);

const updateService = (id, name, username, email, password, avatar) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar }
  );

const deleteService = id => User.findByIdAndDelete(id);

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
};
