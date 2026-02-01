const express=require("express");
const bodyParser= require("body-parser")
const {PORT}= require('./config/serverconfig')
const ApiRoutes=require('./routes/index')
const {Airport,City} = require('./models/index');
const db=require('./models/index')
const { model } = require("mongoose");
const setUpAndStartServer = async()=>{
    //create the express object
    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api',ApiRoutes)
    
    app.listen(3000,async()=>{
      console.log("server started at port",PORT);
      // await db.sequelize.sync({ alter: true });
     const city= await City.findOne({
      where:{
        id:9
       }
     })
     const airports=await city.getAirports()
     console.log(airports)
    
    })
}

setUpAndStartServer()