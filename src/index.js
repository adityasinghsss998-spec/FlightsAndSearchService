const express=require("express");
const {PORT}= require('./config/serverconfig')
const setUpAndStartServer = async()=>{
    //create the express object
    const app=express();
    app.listen(3000,()=>{
      console.log("server started at port",PORT);
      
    })
}

setUpAndStartServer()