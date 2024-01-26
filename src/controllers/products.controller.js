import ProductsService from '../services/products.service.js';

export default class ProductsController {
  static findAll(query = {}) {
    return ProductsService.findAll(query);
  }

  static async findById(id) {
    const result = await ProductsService.findAll({ id });
    return result[0];
  }

  static create(data) {
    return ProductsService.create(data);
  }

  static updateById(id, data) {
    return ProductsService.updateById(id, data);
  }

  static deleteById(id) {
    return ProductsService.deleteById(id);
  }

}