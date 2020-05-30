import { Router } from 'express';

import SaleOrderServices from '../services/SaleOrderServices';

const saleOrderRouter = Router();
const saleOrderServices = new SaleOrderServices();

saleOrderRouter.post('/', saleOrderServices.create);
saleOrderRouter.get('/', saleOrderServices.index);

export default saleOrderRouter;
