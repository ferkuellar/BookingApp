import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

// CREATE HOTEL
router.post('/', async (req, res) => {
    
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(500).json(err)
    }
});

// UPDATE HOTEL
// DELETE HOTEL
// GET HOTEL
// GET ALL HOTEL


export default router;