const {Flightrepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require('../utils/helper')
class FlightService{
  constructor(){
    this.flightrepository=new Flightrepository();
    this.aiplanerepository=new AirplaneRepository()
  }

  async createflight(data){
    if(!compareTime(data.arrivalTime,data.departureTime)){
    throw{error:"arrival time cannot be less than departure"}
    }
    try{
    const airplane=await this.aiplanerepository.getAirplaneid(data.airplaneId);
    const flight=await this.flightrepository.createFlight({
      ...data,
      totalSeats:airplane.capacity
    }
    )
    return flight;
  } catch(e){
      console.log("something went wrong at the service layer")
      throw {e}
    }
  }

  async getAllFLights(data){
    try{
      const flights=await this.flightrepository.getAllflight(data);
      return flights
    }catch(e){
      console.log("something went wrong at the service layer")
      throw {e}
    }
  }
}
module.exports={
  FlightService
}

/**
 * {
 * flightNumber,
 * airplaneId,
 * dapartureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * boardingGate,
 * totalSeats- > airplane
 * }
 */