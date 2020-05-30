import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/repositories/ProductsRepository';

container.registerSingleton<IProductsRepository>(
	'ProductsRepository',
	ProductsRepository,
);
