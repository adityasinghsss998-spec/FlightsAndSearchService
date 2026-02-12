const Crudrepository=require('./crud-repository');
const Airport=require('../models/airport')
class AirportRepo extends Crudrepository{
  constructor(){
    super(Airport);
  }
}
module.exports=AirportRepo