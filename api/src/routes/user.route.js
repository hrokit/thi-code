import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { validID, validUser } from '../middlewares/global.middlewares.js';

const router = Router();

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:id', validID, validUser, userController.findById);
router.patch('/:id', validID, validUser, userController.update);
router.delete('/:id', validID, validUser, userController.deleteUser);

export default router;
