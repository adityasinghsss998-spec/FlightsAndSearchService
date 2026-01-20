const {Cityrepository}=require('./repository/index');
class CityService{
  constructor () {
    this.cityrepository = new Cityrepository();
  }
  async createcity(){
    try{
     const city=await this.cityrepository.createcity(data);
     return city;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
   async deletecity(Cityid){
    
    try{
    const response = this.cityrepository.deletecity(Cityid);
    return response;
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
  async updatecity(cityid,data){
    try{
       const city=this.cityrepository.updatecity(cityid,data);
       return city
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
  async getcity(cityid){
    try{
        const city=this.cityrepository.getcity(cityid);
       return city
    } catch(e){
      console.log("something went wrong at the service layer")
      throw(e)
    }
  }
}
module.exports = {
  CityService
}