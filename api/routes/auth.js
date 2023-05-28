import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola mundo desde auth del backend.!!');
});

router.get('/register', (req, res) => {
    res.send('Hola mundo desde auth register del backend.!!');
});


export default router;