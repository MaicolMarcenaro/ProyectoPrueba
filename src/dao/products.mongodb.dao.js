import ProductsModel from '../models/products.model.js'

export default class ProductDao{
    static getAll = (criteria = {}) =>{
        return ProductsModel.find(criteria);
    }
    static getById = (uid) => {
        return ProductsModel.findById(uid);
    }
    static create = (data) => {
        return ProductsModel.create(data);
    }
    static updateById = (uid, data) => {
        return ProductsModel.updateOne({_id : uid}, {$set: data});
    }
    static deleteById = (uid) => {
        return ProductsModel.deleteOne({_id : uid});
    }
}