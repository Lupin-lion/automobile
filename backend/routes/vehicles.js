const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const vehicles = [
    {
      id: 1,
      type: 'car',
      make: 'Toyota',
      model: 'Camry',
      price: 25000,
      origin: 'foreign',
      year: 2020,
      image: 'images/toyota-camry.jpg',
      contact: 'https://wa.me/1234567890',
      featured: true
    },
    {
      id: 2,
      type: 'bike',
      make: 'Yamaha',
      model: 'R1',
      price: 15000,
      origin: 'foreign',
      year: 2018,
      image: 'images/yamaha-r1.jpg',
      contact: 'https://wa.me/0987654321',
      featured: true
    },
    {
      id: 3,
      type: 'car',
      make: 'Ford',
      model: 'Mustang',
      price: 35000,
      origin: 'local',
      year: 2015,
      image: 'images/ford-mustang.jpg',
      contact: 'https://wa.me/1122334455',
      featured: false
    }
  ];
  res.json(vehicles);
});

module.exports = router;
