import {Router} from 'express';
import ProductsController from '../../controllers/products.controller.js';
import { generarProduct } from '../../utils/utils.js';
import { faker } from '@faker-js/faker';

const router = Router()

router.get('/products', async(req, res, next)=>{
    try {
        req.logger.error('Obteniendo los usuarios... ⏱️');
        const products = await ProductsController.findAll()
        req.logger.fatal('Se obtuvieron los usuarios correctamente ✅');
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})
router.get('/productsFaker', async(req, res, next)=>{
    let products = [];
    try {
        const limit = faker.number.int({ min: 2, max: 8 });
        for (let index = 0; index < limit; index++) {
            products.push(generarProduct());
        }
        res.status(200).json(products);
    } catch (error) {
        next(error)
    }
})

router.get('/products/:pid', async(req, res, next)=>{
    try {
        const {bid} = req.params;
        const product = await ProductsController.findById(bid)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
})

router.post('/products', async(req, res, next)=>{
    try {
        const {body} = req;
        const product = await ProductsController.create(body)
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
})

router.put('/products/:pid', async (req, res, next) => {
    try {
      const { params: { pid }, body } = req;
      await ProductsController.updateById(pid, body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

router.delete('/products/:pid', async (req, res, next) => {
    try {
        const { params: { pid } } = req;
        await ProductsController.deleteById(pid);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

export default router;