import ProductsDTO from "../DTO/products.dto.js";

export default class ProductRepository{
    constructor(dao){
        this.dao = dao
    }

    async get(filter = {}){
        const products = await this.dao.getAll(filter);
        return products.map( product => new ProductsDTO(product))
    }

    async create(data) {
        const newData = {
            title : data.title,
            category : data.category,
            description : data.description,
            price : data.price,
            thumbnails : data.thumbnails,
            status : data.status,
            code : data.code,
            stock : data.stock,
            intenalPrice : data.intenaPrice || 0,
        };
        const newProduct = await this.dao.create(newData);
        return new ProductsDTO(newProduct);
      }
    
      updateById(id, data) {
        const newData = {
            title : data.title,
            category : data.category,
            description : data.description,
            price : data.price,
            thumbnails : data.thumbnails,
            status : data.status,
            code : data.code,
            stock : data.stock,
            intenalPrice : data.intenaPrice || 0,
        };
        return this.dao.updateById(id, newData);
      }
    
      deleteById(id) {
        return this.dao.deleteById(id);
      }
}