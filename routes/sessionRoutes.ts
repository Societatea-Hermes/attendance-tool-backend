import express from 'express';
import { addSession } from '../controllers/sessionController';

const router = express.Router();

router.post('/session', addSession);

export default router;