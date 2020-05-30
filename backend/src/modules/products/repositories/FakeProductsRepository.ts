import { uuid } from 'uuidv4';

import Product from '../entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IProductsRepository from './IProductsRepository';

class ProductsRepository implements IProductsRepository {
	private products: Product[] = [];

	public async create({
		productCode,
		description,
		type,
		salePrice,
		quantity,
		points,
		mainImg,
	}: ICreateProductDTO): Promise<Product> {
		const product = new Product();

		Object.assign(product, {
			id: uuid(),
			productCode,
			description,
			type,
			salePrice,
			quantity,
			points,
			mainImg,
		});

		this.products.push(product);

		return product;
	}

	public async findByCode(productCode: string): Promise<Product | undefined> {
		const productExists = this.products.find(
			product => product.productCode === productCode,
		);

		return productExists;
	}

	public async findByDescription(
		description: string,
	): Promise<Product | undefined> {
		const productExists = this.products.find(
			product => product.description === description,
		);

		return productExists;
	}

	public async list(): Promise<Product[] | undefined> {
		return this.products;
	}
}

export default ProductsRepository;
