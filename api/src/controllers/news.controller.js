import { createService, findAllService } from '../services/news.service.js';

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    if (!title || !text || !banner) {
      res.status(400).send({
        message: 'Submit all fields, please',
      });
    }

    const news = await createService({
      title,
      text,
      banner,
      user: { _id: '63c555d892c3a92ea365dc69' },
    });

    res.status(201).send({ message: 'News was created successfully.', news });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const news = await findAllService();

    if (news.length === 0) {
      return res.status(400).send('There are no registered news');
    }

    res.send(news);
  } catch (error) {
    res.send({ message: error.message });
  }
};
