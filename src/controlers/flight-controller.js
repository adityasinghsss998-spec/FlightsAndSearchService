const{successCodes}=require('../utils/error-codes')
const {FlightService}=require('../services/index');
const { response } = require('express');
const flightservice=new FlightService();
const create= async(req,res)=>{
  try{
    let createflightData={
      flightNumber:req.body.flightNumber,
      airplaneId: req.body.airplaneId ,
      departureAirportId:req.body.departureAirportId,
      arrivalAirportId:req.body. arrivalAirportId ,
      arrivalTime: req.body.arrivalTime,
      departureTime:req.body. departureTime,
      price:req.body.price,
      boardingGate:req.body.boardingGate,
      totalSeats:req.body.totalSeats
    }
    const flight=await flightservice.createflight(createflightData);
    return res.status(successCodes.CREATED).json({
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
const getAll=async (req,res)=>{
  try{
   const response=await flightservice.getAllFLights(req.query);
   return res.status(successCodes.Ok).json({
      data:response,
      success:true,
      message:"successfully got the flights",
      error:{}
    })
  }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to get the flights",
      error:e
    })
   }
}
module.exports={
  create,
  getAll
}