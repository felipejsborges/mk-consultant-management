import { Router } from 'express';

import PurchaseOrderServices from '../services/PurchaseOrderServices';

const purchaseOrderRouter = Router();
const purchaseOrderServices = new PurchaseOrderServices();

purchaseOrderRouter.post('/', purchaseOrderServices.create);
purchaseOrderRouter.get('/', purchaseOrderServices.index);

export default purchaseOrderRouter;
