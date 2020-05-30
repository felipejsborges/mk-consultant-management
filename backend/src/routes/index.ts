import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
// import purchaseOrderRouter from '@modules/purchaseOrders/routes/purchaseOrder.routes';
// import saleOrderRouter from '@modules/saleOrders/routes/saleOrder.routes';

const routes = Router();

routes.use('/products', productsRouter);
// routes.use('/purchaseorders', purchaseOrderRouter);
// routes.use('/saleorders', saleOrderRouter);

export default routes;
