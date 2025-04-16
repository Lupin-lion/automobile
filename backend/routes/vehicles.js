const express = require('express');
const router = express.Router();

// Mock data with verified Unsplash image URLs (optimized with width and height)
const vehicles = [
  {
    id: 1,
    type: 'car',
    make: 'Toyota',
    model: 'Camry',
    price: 15000,
    origin: 'foreign',
    year: 2018,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=200&fit=crop',
    contact: 'https://wa.me/254799582173',
    featured: true
  },
  {
    id: 2,
    type: 'car',
    make: 'Ford',
    model: 'Mustang',
    price: 25000,
    origin: 'foreign',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=200&fit=crop',
    contact: 'https://wa.me/254799582173',
    featured: true
  },
  {
    id: 3,
    type: 'bike',
    make: 'Yamaha',
    model: 'R1',
    price: 12000,
    origin: 'foreign',
    year: 2019,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=300&h=200&fit=crop',
    contact: 'https://wa.me/254799582173',
    featured: false
  },
  {
    id: 4,
    type: 'bike',
    make: 'Suzuki',
    model: 'GSX-R750',
    price: 9000,
    origin: 'foreign',
    year: 2015,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&h=200&fit=crop',
    contact: 'https://wa.me/254799582173',
    featured: false
  },
  {
    id: 5,
    type: 'car',
    make: 'Toyota',
    model: 'Corolla',
    price: 12000,
    origin: 'local',
    year: 2015,
    image: 'https://images.unsplash.com/photo-1600585154347-7b7f9e1b3f5b?w=300&h=200&fit=crop',
    contact: 'https://wa.me/254799582173',
    featured: false
  }
];

let vehicleList = [...vehicles];

router.get('/', (req, res) => {
  res.json(vehicleList);
});

router.post('/', (req, res) => {
  const { type, make, model, price, origin, year, image, contact, featured } = req.body;
  if (!type || !make || !model || !price || !origin || !year) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const newVehicle = {
    id: vehicleList.length + 1,
    type,
    make,
    model,
    price,
    origin,
    year,
    image: image || 'https://via.placeholder.com/300x200',
    contact: contact || 'https://wa.me/254799582173',
    featured: featured || false
  };

  vehicleList.push(newVehicle);
  res.status(201).json(newVehicle);
});

module.exports = router;