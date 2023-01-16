import User from '../models/User.model.js';

export const loginService = email =>
  User.findOne({ email }).select('+password');
