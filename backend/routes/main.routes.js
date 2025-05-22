import express from 'express';
import checkVul from '../controller/main.controller.js';

const router = express.Router();

router.post('/scan', checkVul);

export default router;