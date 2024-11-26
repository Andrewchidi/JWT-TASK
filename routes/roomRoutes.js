import express from 'express';
import { createRoomType, createRoom } from '../controllers/roomController.js';
import { validateRoomType, validateRoom } from '../middlewares/validationMiddleware.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/room-types', protect, admin, validateRoomType, createRoomType);
router.post('/rooms', protect, admin, validateRoom, createRoom);

export default router;
