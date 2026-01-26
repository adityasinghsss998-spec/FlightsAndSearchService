const { City } = require('../models/index');

class CityRepository{
  async createCity({name}){
    try{
      const city=await City.create({name});
      return city;
    } catch (error){
      console.log("Something went wrong in the repository layer")
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
      console.log("something went wrong in the repository layer")
    throw({e})
  } 
  }

  async updateCity({Cityid,data}){
      try{
       const city=await City.update(data,{
        where:{
        id:Cityid
        }
       })
       return city;
      } catch(e){
         console.log("something went wrong in the repository layer")
        throw(e)
      }
  }
  async getCity(Cityid){
    try{
     const city=await City.findByPk(Cityid);
     return city
    } catch(e){
      console.log("something went wrong in the repository layer")
    throw({e})
  } 
  }
}
module.exports = CityRepository;