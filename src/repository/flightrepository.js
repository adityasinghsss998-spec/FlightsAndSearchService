
const { Flight } = require('../models/index')
class Flightrepository{
    async createFlight(data){
      try{
        const flight=await Flight.create(data)
        return flight;
      } catch(e){
          console.log("something went wrong at the repository layer..");
          throw(e);
      }
    }
}
module.exports=Flightrepository