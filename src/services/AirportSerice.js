const Airportrepository=require('../repository/Airportrepository');
class AirportService{
  constructor(){
     this.Airportrepository= new Airportrepository();
  }
  async CreateAirport(data){
    try{
     const airport=await this.Airportrepository.createAirport(data)
     return airport;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e);
    }
  }
  async DeleteAirport(Airportid){
  try{
     const airport=await this.Airportrepository.deleteAirport(Airportid)
     return airport;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e);
    }
  }
  async GetAirport(Airportid){
    try{
    const airport=await this.Airportrepository.getAirport(Airportid)
    return airport;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e);
    }
  }
  async Getall(){
     try{
     const airpors=await this.Airportrepository.getAll()
     return airpors;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e);
    }
  }
  async UpdateAirport(data,id){
    try{
    const airports=await this.Airportrepository.update(data,id);
    return airports;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e);
    }
  }
}
module.exports={
  AirportService
}