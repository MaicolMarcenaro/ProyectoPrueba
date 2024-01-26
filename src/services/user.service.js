import {userRepository} from "../repositories/index.js";

export default class UserService {
    static findAll(filter = {}) {
      return userRepository.getAll(filter);
    }
  
    static create(data) {
      return userRepository.create(data);
    }
  
    static updateById(id, data) {
      return userRepository.updateById(id, data);
    }
  
    static deleteById(id) {
      return userRepository.deleteById(id);
    }
  }