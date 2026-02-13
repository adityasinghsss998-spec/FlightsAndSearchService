const express = require("express");
const CityController= require('../../controlers/cityController');
const Flightcontroller=require('../../controlers/flight-controller')
const{validateCreateflight}=require('../../middlewares/index')
const router= express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city',CityController.getAll)
router.patch('/city/:id', CityController.update);
router.post('/city/bulk',CityController.AddCities);
router.post('/flight',validateCreateflight,Flightcontroller.create)
router.get('/flight',Flightcontroller.getAll);
module.exports = router;
