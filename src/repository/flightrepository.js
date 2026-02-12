
const { Flight } = require('../models/index')
const {Op}=require('sequelize')
class Flightrepository{
    #createFliter(data){
        let filter={};
        if(data.arrivalAirportId){
          filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
          filter.departureAirportId=data.departureAirportId
        }
        if(data.minPrice && data.maxPrice){
          Object.assign(filter, { 
                price: { [Op.between]: [data.minPrice, data.maxPrice] } 
            });
        }
        else if(data.minPrice){
           // Object.assign(filter,{[Op.gte]:data.minPrice});
            Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        }
      else  if(data.maxPrice){
          Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
         }
        return filter;
    }


    async createFlight(data){
      try{
        const flight=await Flight.create(data)
        return flight;
      } catch(e){
          console.log("something went wrong at the repository layer..");
          throw(e);
      }
    }
    async getFlight(flightid){
       try{
        const flight=await Flight.findByPk(flightid);
        return flight;
      } catch(e){
          console.log("something went wrong at the repository layer..");
          throw(e);
      }
    }
    async getAllflight(filter){
       try{
        const filterObject=this.#createFliter(filter);
        const flight=await Flight.findAll({
          where:filterObject
        })
        return flight;
      } catch(e){
          console.log("something went wrong at the repository layer..");
          throw(e);
      }
    }
}
module.exports=Flightrepository

/*
{
  where: {
      arrivalAirportId:2,
      departureAirportId:4,
      price:{[Op.gte]:4000}
    }
}
*/