import Room from '../models/Room.js';
import RoomType from '../models/RoomType.js';

const createRoomType = async (req, res) => {
  const { name } = req.body;
  try {
    const roomType = await RoomType.create({ name });
    res.status(201).json(roomType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createRoom = async (req, res) => {
  const { name, roomType, price } = req.body;
  try {
    const room = await Room.create({ name, roomType, price });
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { createRoomType, createRoom };
