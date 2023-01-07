import { Router } from 'express';
import { setAvatar } from '../controllers/user.controller';

const router = Router();

router.put('/setAvatar/:userId', setAvatar);

export default router;
