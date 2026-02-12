const { message } = require('telegraf/filters');
const {FlightService}=require('../services/index');
const { response } = require('express');
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
const getAll=async (req,res)=>{
  try{
   const response=await flightservice.getAllFLights(req.query);
   return res.status(201).json({
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