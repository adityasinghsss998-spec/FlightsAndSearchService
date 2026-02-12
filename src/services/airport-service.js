const {CrudService}=require('./crud-service');
const {AirportRepo}=require('../repository/index')
class AirportService2 extends CrudService{
  constructor(){
  const airportrepository=new AirportRepo();
  super(airportrepository)
  }
}
module.exports ={
  AirportService2
}


