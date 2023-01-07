import { Router } from 'express';
const router = Router();
import authRoutes from '../routes/auth.routes';
import userRoutes from '../routes/user.routes';

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
