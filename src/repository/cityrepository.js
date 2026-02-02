const { City } = require('../models/index');
const {Op} = require('sequelize')
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

  async deleteCity(Cityid){
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

  async updateCity(Cityid,data){
      try{
        //the below approach also works but will not return updated object
      //  const city=await City.update(data,{
      //   where:{
      //   id:Cityid
      //   }
      //  }) 
      // for gettiong updated data in mysql we use the below approach
      const city=await City.findByPk(Cityid);
      city.name=data.name;
      await city.save();
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
  async getAllcities(filter){
    try{
      if(filter.name){
        const cities=await City.findAll({
          where:{
            name:{
              [Op.startsWith] : filter.name
            }
          }
        })
        return cities;
        
      }
      // const cities=await City.findAll();
      // return cities;
    }catch(e){
      console.log("something went wrong in the repository layer")
    throw({e})
    }
   
  }
  async addMultipleCities(data){
       try{
        const cities= await City.bulkCreate(data);
        return cities;
    } catch(e){
      console.log("something went wrong in the repository layer")
    throw({e})
  } 
    }
}
module.exports = CityRepository;