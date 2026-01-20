const { City } = require('../models/index');

class CityRepository{
  async createCity({name}){
    try{
      const city=await City.create({name});
    } catch (error){
      throw(error)
    }
  }

  async deleteCity({Cityid}){
    try{
      await City.destroy({
        where : {
          id:Cityid
        }
      });
    }catch(e){
    throw({e})
  } 
  }
}
module.exports = CityRepository;