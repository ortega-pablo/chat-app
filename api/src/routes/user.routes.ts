import { Router } from 'express';
import {
  changePass,
  currentUser,
  getUsers,
  setAvatar
} from '../controllers/user.controller';

const router = Router();

router.put('/setAvatar/:userId', setAvatar);
router.get('/allUsers/:userId', getUsers);
router.get('/:userId', currentUser);
router.put('/changePass/:userId', changePass);

export default router;
