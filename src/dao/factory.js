import config from "../config/config.js";

export let TypeProductsDao;

switch (config.persistence) {
    case 'MongoDB':
        TypeProductsDao=(await import('./products.mongodb.dao.js')).default;
        break;
    default:
        TypeProductsDao=(await import('./products.file.dao.js')).default;
        break;
}
