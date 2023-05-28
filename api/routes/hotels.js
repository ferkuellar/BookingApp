import express from 'express';
import { 
    createHotel, 
    updateHotel, 
    deleteHotel, 
    getHotel, 
    getHotels 
} from '../controllers/hotels.js';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);


export default router;