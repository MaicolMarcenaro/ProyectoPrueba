import UserService from '../dao/user.mongodb.dao.js';
import { tokenGenerator, UnauthorizedException, isValidPassword } from '../utils/utils.js';

export default class AuthController {
  static async login(email, password) {
    const [user] = await UserService.getAll({ email });
    if (!user) {
      throw new UnauthorizedException('Email o pass invalidos.');
    }
    const userValid =  isValidPassword(user.password, user)
    if (!userValid) {
      throw new UnauthorizedException('Email o pass invalidos.');
    }
    const token = tokenGenerator(user);

    return token;

  }
}