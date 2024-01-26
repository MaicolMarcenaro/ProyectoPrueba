import ProductRepository from "./products.repository.js";
import { TypeProductsDao } from "../dao/factory.js";

export const productRepository = new ProductRepository(new TypeProductsDao())


import UserRepository from "./user.repository.js";
import UserDao from "../dao/user.mongodb.dao.js";
export const userRepository = new UserRepository(new UserDao())