import { inject, injectable } from 'tsyringe';

// import AppError from '../../../errors/AppError';
import Product from '../entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class ListProductsService {
	constructor(
		@inject('ProductsRepository')
		private productsRepository: IProductsRepository,
	) {}

	public async execute(): Promise<Product[] | undefined> {
		const products = await this.productsRepository.list();

		return products;
	}
}

export default ListProductsService;
