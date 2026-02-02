const {Airport}=require('../models/index');
const {Op, where} = require('sequelize')
class AirRepository{
  async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
    }
   async deleteAirport(Airportid){
       try{
        await Airport.destroy({
          where:{
            id:Airportid
          }
        })
    }catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
   }
   async getAirport(Airportid){
    try{
    const airport=await Airport.findByPk(Airportid);
    return airport;
    } catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
   }
   async getAll(){
    try{
    const airports=await Airport.findAll();
    return airports;
    }catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
   }
   async update({name},Airportid){
    try{
      const airport=await Airport.findByPk(Airportid);
      airport.name=name;
      await airport.save();
      return airport;
    } catch (e) {
            console.log("Something went wrong at the repository layer");
            console.log(e);
            throw { e };
        }
   }
}
module.exports = AirRepository