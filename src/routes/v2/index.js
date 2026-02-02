const express = require("express");
const AirportController=require('../../controlers/AirportController')
const router=express.Router();
router.post('/airport',AirportController.createairport);
router.get('/airport/getall',AirportController.getall)
router.get('/airport/get/:id',AirportController.getairport)
router.patch('/airport/update',AirportController.updateairport)
router.delete('/airport/delete/:id',AirportController.deleteairport)
module.exports = router;