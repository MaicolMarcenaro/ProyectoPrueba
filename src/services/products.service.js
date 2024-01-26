import { productRepository } from '../repositories/index.js';

export default class ProductsService {
  static findAll(filter = {}) {
    return productRepository.get(filter);
  }

  static create(data) {
    return productRepository.create(data);
  }

  static updateById(id, data) {
    return productRepository.updateById(id, data);
  }

  static deleteById(id) {
    return productRepository.deleteById(id);
  }
}
