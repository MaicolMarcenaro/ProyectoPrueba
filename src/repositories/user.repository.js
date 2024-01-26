import UserDTO from "../DTO/user.dto.js";

export default class UserRepository{
    constructor(dao){
        this.dao = dao
    }
    async getAll(filter = {}){
        const users = await this.dao.getAll(filter);
        return users.map( user => new UserDTO(user))
    }

    async create(data) {
        const [first_name, last_name] = data.fullName.split(' ');
        const newData = {
            first_name,
            last_name,
            email : data.email,
            age : data.age,
            password : data.password,
            role : data.role,
            provider : data.provider,
            cart : data.cart,
        };
        const newProduct = await this.dao.create(newData);
        return new UserDTO(newProduct);
      }
    
      updateById(id, data) {
        const [first_name, last_name] = data.fullName.split(' ');
        const newData = {
            first_name,
            last_name,
            email : data.email,
            age : data.age,
            password : data.password,
            role : data.role,
            provider : data.provider,
            cart : data.cart,
        };
        const updateUser =  this.dao.updateById(id, newData);
        return new UserDTO(updateUser);
      }
    
      deleteById(id) {
        return this.dao.deleteById(id);
      }
}