import ProductsModel from '../models/products.model.js'

export default class ProductDao{
    getAll = (criteria = {}) =>{
        return ProductsModel.find(criteria);
    }
    getById = (uid) => {
        return ProductsModel.findById(uid);
    }
    create = (data) => {
        return ProductsModel.create(data);
    }
    updateById = (uid, data) => {
        return ProductsModel.updateOne({_id : uid}, {$set: data});
    }
    deleteById = (uid) => {
        return ProductsModel.deleteOne({_id : uid});
    }
}