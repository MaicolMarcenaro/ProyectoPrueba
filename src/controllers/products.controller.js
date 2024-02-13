import ProductsService from '../services/products.service.js';
import { CustomerError } from '../utils/customerError.js';
import enumError from '../utils/enumError.js';
import { Incomplete_Fields_Error, Product_Existing, Stock_0 } from '../utils/causeMenssage.js';

export default class ProductsController {
  static findAll(query = {}) {
    return ProductsService.findAll(query);
  }

  static async findById(id) {
    const result = await ProductsService.findAll({ id });
    return result[0];
  }

  static async create(data) {
    const {
      title,
      category,
      description,
      price,
      thumbnails,
      status,
      code,
      stock,
      intenalPrice,
    } = data;

    if (stock==0) {
      return CustomerError.createError({
        name: "Stock 0",
        cause: Stock_0(),
        message: "Debe ingresar el producto con un minimo de 1 de stock",
        codeE: enumError.STOCK_0_ERROR,
      })
    } 


    if (
      !title||
      !category||
      !description||
      !price||
      !thumbnails||
      !status||
      !code||
      !stock||
      !intenalPrice
    ) {
      return CustomerError.createError({
        name: "Campos incompletos",
        cause: Incomplete_Fields_Error(),
        message: "Debes completar todos los campos",
        codeE: enumError.INCOMPLETE_FIELDS_ERROR,
      })
    }
    let prd = []
    prd = await ProductsService.findAll({code: code})
    if (
      prd.length !=0
    ) {
      return CustomerError.createError({
        name: "Codigo de Prducto ya existe",
        cause: Product_Existing(code),
        message: "Debe de ingresar otro codigo",
        codeE: enumError.PRODUCT_EXISTING,
      })
    }
    

    return ProductsService.create(data);
    
  }

  static updateById(id, data) {
    return ProductsService.updateById(id, data);
  }

  static deleteById(id) {
    return ProductsService.deleteById(id);
  }

}