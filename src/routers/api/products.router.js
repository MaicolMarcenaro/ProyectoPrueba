import {Router} from 'express';
import ProductsController from '../../controllers/products.controller.js';

const router = Router()

router.get('/products', async(req, res, next)=>{
    try {
        const products = await ProductsController.findAll()
        res.status(200).json(products)
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