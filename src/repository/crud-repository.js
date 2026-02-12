class Crudrepository{
  constructor(model){
    this.model=model;
  }
  async create(data){
    try{
      const result=await this.model.create(data);
      return result;
    }catch(e){
      console.log("something went wrong in crud repo")
    }
  }
  async destroy(modelId){
    try{
       await this.model.destroy({
        where:{
          id:modelId
        }
       })
       return true
    }catch(e){
      console.log("something went wrong in crud repo")
    }
  }
  async get(modelId){
    try{
     const result=await this.model.findByPk(modelId);
    }catch(e){
      console.log("something went wrong in crud repo")
    }
  }
  async getAll(){
    try{
     const result=await this.model.findAll();
    }catch(e){
      console.log("something went wrong in crud repo")
    }
  }
  async update(modelId,data){
    try{
     const result=await this.model.update(data,{
      where:{
        id:modelId
      }
     })
     return result;
    }catch(e){
      console.log("something went wrong in crud repo")
    }
  }
}
module.exports=Crudrepository