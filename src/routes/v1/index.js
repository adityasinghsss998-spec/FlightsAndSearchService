const express = require("express");
const CityController= require('../../controlers/cityController');
const router= express.Router();
router.post('/city',CityController.create);

module.exports = router;