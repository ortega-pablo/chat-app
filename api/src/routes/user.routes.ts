import { Router } from 'express';
import { getUsers, setAvatar } from '../controllers/user.controller';

const router = Router();

router.put('/setAvatar/:userId', setAvatar);
router.get('/:userId', getUsers);

export default router;
