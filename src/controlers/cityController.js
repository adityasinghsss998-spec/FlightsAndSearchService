
const { response } = require('express');
const { CityService } = require('../services/index');

const cityservice= new CityService()
//POST->req.body
const create = async (req,res)=>{
   try{
     const city=await cityservice.createCity(req.body);
     return res.status(201).json({
      data:city,
      success:true,
      message:"Sucessfully created a city",
      err:{}
     })
   }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to create a city",
      error:e
    })
   }
}
// /DELETE-> /city:id
const destroy = async (req,res)=>{
   try{
     const city=await cityservice.deleteCity(req.params.id);
     return res.status(200).json({
      data:city,
      success:true,
      message:"Sucessfully created a city",
      err:{}
     })
   }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to delete the city",
      error:e
    })
   }
}
//GET TYPE-> /city/:id
const get = async (req,res)=>{
   try{
     const city=await cityservice.getCity(req.params.id);
     return res.status(201).json({
      data:city,
      success:true,
      message:"Sucessfully got the city",
      err:{}
     })
   }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to get the  city",
      error:e
    })
   }
}
//patch -> /city/:id
const update = async (req,res)=>{
   try{
     const city=await cityservice.updateCity(req.params.id,req.body);
     return res.status(201).json({
      data:city,
      success:true,
      message:"Sucessfully updated a city",
      err:{}
     })
   }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to update a city",
      error:e
    })
   }
}
const  getAll=async (req,res)=>{
    try{
     const cities=await cityservice.getAllcities(req.query);
      return res.status(201).json({
      data:cities,
      success:true,
      message:"Sucessfully fetched all cities",
      err:{}
     })
   }catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to fetch all city",
      error:e
    })
   }
}
const AddCities= async(req,res)=>{
   try{
     const response=await cityservice.AddMultipleCities(req.body)
   }catch(e){
       console.log(e);
       return res.status(500).json({
        data:{},
        success:false,
        message:"not able to crewte the cities",
        error:e
       })
   }
}
module.exports= {
  create,
  destroy,
  get,
  update,
  getAll,
  AddCities,
}