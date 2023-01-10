import { Router } from 'express';
const router = Router();
import authRoutes from '../routes/auth.routes';
import userRoutes from '../routes/user.routes';
import messagesRoutes from '../routes/messages.routes';

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/message', messagesRoutes);

export default router;
