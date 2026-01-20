const express=require("express");
const bodyParser= require("body-parser")
const {PORT}= require('./config/serverconfig')

const setUpAndStartServer = async()=>{
    //create the express object
    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.listen(3000,async()=>{
      console.log("server started at port",PORT);
     
    
    })
}

setUpAndStartServer()