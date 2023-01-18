import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';

export const loginService = email =>
  User.findOne({ email }).select('+password');

export const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 86400 });
