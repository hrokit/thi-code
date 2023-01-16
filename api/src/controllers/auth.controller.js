import bcrypt from 'bcryptjs';
import { loginService } from '../services/auth.service.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService(email);
    if (!user) {
      return res.status(404).send({ message: 'User or password is wrong' });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(404).send({ message: 'User or password is wrong' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
