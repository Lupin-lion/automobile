const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const vehicles = [
    { id: 1, type: 'car', make: 'Toyota', model: 'Camry', price: 25000, origin: 'foreign', year: 2020, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', contact: 'https://wa.me/1234567890', featured: true },
    { id: 2, type: 'bike', make: 'Yamaha', model: 'R1', price: 15000, origin: 'foreign', year: 2018, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc', contact: 'https://wa.me/0987654321', featured: true },
    { id: 3, type: 'car', make: 'Ford', model: 'Mustang', price: 35000, origin: 'local', year: 2015, image: 'https://images.unsplash.com/photo-1583119912189-1c2b9c528a10', contact: 'https://wa.me/1122334455', featured: false }
  ];
  res.json(vehicles);
});

module.exports = router;