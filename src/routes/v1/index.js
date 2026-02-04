const express = require("express");
const CityController= require('../../controlers/cityController');
const Flightcontroller=require('../../controlers/flight-controller')
const router= express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city',CityController.getAll)
router.patch('/city/:id', CityController.update);
router.post('/city/bulk',CityController.AddCities);
router.post('/flight',Flightcontroller.create)
module.exports = router;