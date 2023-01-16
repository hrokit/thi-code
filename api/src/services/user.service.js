import User from '../models/User.model.js';

const createService = body => User.create(body);

const findAllService = () => User.find();

const findByIdService = id => User.findById(id);

const updateService = (id, name, username, email, password) =>
  User.findOneAndUpdate({ _id: id }, { name, username, email, password });

const deleteService = id => User.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
};
