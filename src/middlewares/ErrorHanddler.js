import enumError from "../utils/enumError.js";

export default (error, req, res, next)=>{
    console.log(error.cause)
    switch (error.code) {
        case enumError.INCOMPLETE_FIELDS_ERROR:
        case enumError.STOCK_0_ERROR:
            res.status(400).json({ status: 'error', message: error.message})
            break;
        case enumError.PRODUCT_EXISTING:
            res.status(401).json({ status: 'error', message: error.message})
            break;
        default:
            res.status(500).json({ status: 'error', message: 'Error desconocido' });
            break;
    }
}