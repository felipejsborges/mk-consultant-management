import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '../services/CreateProductService.ts';
import ListProductsService from '../services/ListProductsService';

export default class ProductsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const {
			productCode,
			description,
			type,
			salePrice,
			quantity,
			points,
			mainImg,
		} = request.body;

		const createProduct = container.resolve(CreateProductService);

		const product = await createProduct.execute({
			productCode,
			description,
			type,
			salePrice,
			quantity,
			points,
			mainImg,
		});

		return response.json(product);
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const listProducts = container.resolve(ListProductsService);

		const products = await listProducts.execute();

		return response.json(products);
	}
}
