import UserService from '../services/user.service.js';

import { NotFoundException } from '../utils.js';

export default class UsersController {
  static getAll = (query={}) => {
   return UserService.findAll(query);
  };
  
  static getById = async (uid) => {
    const user = await UserService.findAll(uid);
    if (!user) {
      throw new NotFoundException('Not found');
    }
    return user;
  };

  static create = (data) => {
    return UserService.create(data);
  };

  

  static updateById = (uid, data) => {
    return UserService.updateById(uid, data);
  };

  static deleteById = (pid)=>{
    return UserService.deleteById(uid);
  }

  static delete
}