// import EmailService from '../services/email.service.js';
import UserService from '../services/user.service.js';

import { NotFoundException } from '../utils/utils.js';

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

  static create = async (data) => {
    //Logica paqra crear usuario, campos completos, etc
    const user = await UserService.create(data);
    // const emailService = EmailService.getInstance()
    // await emailService.SendWelcomeEmail(user)
    return user
  };

  

  static updateById = (uid, data) => {
    return UserService.updateById(uid, data);
  };

  static deleteById = (pid)=>{
    return UserService.deleteById(uid);
  }

  static delete
}