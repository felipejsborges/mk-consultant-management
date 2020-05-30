import { Router } from 'express';

import ProductController from '../controllers/ProductController';

const productsRouter = Router();
const productController = new ProductController();

productsRouter.post('/', productController.create);
productsRouter.get('/', productController.index);

export default productsRouter;
