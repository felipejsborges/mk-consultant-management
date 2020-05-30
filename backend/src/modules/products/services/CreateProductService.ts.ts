import { inject, injectable } from 'tsyringe';

import AppError from '../../../errors/AppError';
import Product from '../entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
	productCode: string;
	description: string;
	type: string;
	salePrice: number;
	quantity: number;
	points: number;
	mainImg: string;
}

@injectable()
class CreateProductService {
	constructor(
		@inject('ProductsRepository')
		private productsRepository: IProductsRepository,
	) {}

	public async execute({
		productCode,
		description,
		type,
		salePrice,
		quantity,
		points,
		mainImg,
	}: IRequest): Promise<Product> {
		const checkProductExistsByCode = await this.productsRepository.findByCode(
			productCode,
		);

		const checkProductExistsByDescription = await this.productsRepository.findByDescription(
			description,
		);

		if (checkProductExistsByCode || checkProductExistsByDescription) {
			throw new AppError('Product already registered.');
		}

		const product = await this.productsRepository.create({
			productCode,
			description,
			type,
			salePrice,
			quantity,
			points,
			mainImg,
		});

		return product;
	}
}

export default CreateProductService;
