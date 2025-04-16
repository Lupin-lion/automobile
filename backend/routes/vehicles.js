const express = require('express');
const router = express.Router();

let vehicles = [
  { id: 1, type: 'car', make: 'Toyota', model: 'Camry', price: 25000, origin: 'foreign', year: 2020, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', contact: 'https://wa.me/254799582173', featured: true },
  { id: 2, type: 'bike', make: 'Yamaha', model: 'R1', price: 15000, origin: 'foreign', year: 2018, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc', contact: 'https://wa.me/254799582173', featured: true },
  { id: 3, type: 'car', make: 'Ford', model: 'Mustang', price: 35000, origin: 'local', year: 2015, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888', contact: 'https://wa.me/254799582173', featured: false },
];

router.get('/', (req, res) => {
  res.json(vehicles);
});

router.post('/', (req, res) => {
  const { type, make, model, price, origin, year, image, contact, featured } = req.body;
  if (!type || !make || !model || !price || !origin || !year) {
    return res.status(400).json({ message: 'All fields except image, contact, and featured are required' });
  }

  const newVehicle = {
    id: vehicles.length + 1,
    type,
    make,
    model,
    price,
    origin,
    year,
    image: image || 'https://via.placeholder.com/300x200?text=No+Image',
    contact: contact || '#',
    featured: featured || false,
  };
  vehicles.push(newVehicle);
  res.status(201).json({ message: 'Vehicle created successfully', vehicle: newVehicle });
});

module.exports = router;