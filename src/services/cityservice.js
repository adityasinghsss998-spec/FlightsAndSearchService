const CityRepository=require('../repository/cityrepository');
class CityService{
  constructor () {
    this.cityrepository = new CityRepository();
  }
  async createCity(data){
    try{
     const city=await this.cityrepository.createCity(data);
     return city;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
   async deleteCity(Cityid){
    
    try{
    const response = await this.cityrepository.deleteCity(Cityid);
    return response;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
  async updateCity(cityid,data){
    try{
       const city=await this.cityrepository.updateCity(cityid,data);
       return city
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
  async getCity(cityid){
    try{
        const city=await this.cityrepository.getCity(cityid);
       return city
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
  async getAllcities(filter){
    try{
      const cities=await this.cityrepository.getAllcities({name:filter.name});
      return cities;
    } catch(e){
      console.log("something went wrong at the repository layer");
      throw(e);
    }
  }
}
module.exports = {
  CityService
}