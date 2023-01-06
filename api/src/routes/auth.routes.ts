import { Router } from 'express';
import { decryptToken, logIn, signUp } from '../controllers/user.controller';

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/decryptToken', decryptToken);

export default router;
