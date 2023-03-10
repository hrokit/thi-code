import userService from '../services/user.service.js';

const create = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      res.status(400).send({ message: 'Submit all fields for registration' });
    }

    const user = await userService.createService(req.body);

    res.status(201).send({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send('There are no registered users');
    }

    res.send(users);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { user } = req;

    res.send(user);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name && !username && !email && !password) {
      res.status(400).send({ message: 'Fill at least one field for update' });
    }

    const { id } = req.params;

    await userService.updateService(id, name, username, email, password);

    res.send({ message: 'User updated successfully' });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await userService.deleteService(id);

    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.send({ message: error.message });
  }
};

export default { create, findAll, findById, update, deleteUser };
