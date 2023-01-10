import { Router } from 'express';
import { addMessage, getMessages } from '../controllers/messages.controller';

const router = Router();

router.post('/add', addMessage);
router.post('/', getMessages);

export default router;
