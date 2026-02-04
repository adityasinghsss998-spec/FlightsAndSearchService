const {Airplane}=require('../models/index');
class AirplaneRepository{
  async getAirplaneid(id){
    try{
      const airplane=await Airplane.findByPk(id);
      return airplane
    }catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
  }
}
module.exports=AirplaneRepository