const {AirportService2}=require('../services/index');
const airportservice=new AirportService2();
//post
const createairport=async(req,res)=>{
   try{
     const response=await airportservice.create(req.body);
     return res.status(201).json({
            message: 'Successfully created airport',
            err: {},
            data: response,
            success: true
     })
   } catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to create an airport",
      error:e
    })
   }
}
const deleteairport=async(req,res)=>{
  try{
     const response=await airportservice.DeleteAirport(req.params.id);
     return res.status(201).json({
            message: 'Successfully deleted airport',
            err: {},
            data: response,
            success: true
     })
   } catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to delete an airport",
      error:e
    })
   }
}
const getairport=async(req,res)=>{
  try{
     const response=await airportservice.GetAirport(req.params.id)
     return res.status(201).json({
            message: 'Successfully got airport',
            err: {},
            data: response,
            success: true
     })
   } catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to get the airport",
      error:e
    })
   }
}
const getall=async(req,res)=>{
  try{
     const response=await airportservice.Getall()
     return res.status(201).json({
            message: 'Successfully got airport',
            err: {},
            data: response,
            success: true
     })
    }  catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to get  airport",
      error:e
    })
   }
}

const updateairport=async(req,res)=>{
   try{
     const response=await airportservice.UpdateAirport(req.body,req.params.id);
     return res.status(201).json({
            message: 'Successfully updated airport',
            err: {},
            data: response,
            success: true
     })
   } catch(e){
    console.log(e);
    return res.status(500).json({
      data:{},
      success:false,
      message:"not able to update the airport",
      error:e
    })
   }
}
module.exports={
  createairport,
  deleteairport,
  getairport,
  getall,
  updateairport,
}