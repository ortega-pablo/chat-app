import { Router } from 'express';
const router = Router();
import authRoutes from '../routes/auth.routes';

router.use('/auth', authRoutes);

export default router;
