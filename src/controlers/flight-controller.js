const { message } = require('telegraf/filters');
const {FlightService}=require('../services/index');
const flightservice=new FlightService();
const create= async(req,res)=>{
  try{
    const flight=await flightservice.createflight(req.body);
    return res.status(201).json({
      data:flight,
      success:true,
      message:"successfully created a flight",
      error:{}
    })
  }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to create the flight",
      error:e
    })
   }
}
module.exports={
  create
}