export default class ProductsDTO{
    constructor(product){
        this.title = product.title;
        this.category = product.category;
        this.description = product.description;
        this.price = product.price;
        this.thumbnails = product.thumbnails;
        this.status = product.status;
        this.code = product.code;
        this.stock = product.stock;
    }
}