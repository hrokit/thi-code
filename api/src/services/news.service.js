import News from '../models/News.model.js';

export const createService = body => News.create(body);

export const findAllService = () => News.find();
