import { getRepository, Repository } from 'typeorm';

import IProductsRepository from './IProductsRepository';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
// import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';
import Product from '../entities/Product';

// interface IFindProducts {
// 	id: string;
// }

class ProductsRepository implements IProductsRepository {
	private ormRepository: Repository<Product>;

	constructor() {
		this.ormRepository = getRepository(Product);
	}

	public async create({
		productCode,
		description,
		type,
		salePrice,
		quantity,
		points,
		mainImg,
	}: ICreateProductDTO): Promise<Product> {
		const product = this.ormRepository.create({
			productCode,
			description,
			type,
			salePrice,
			quantity,
			points,
			mainImg: mainImg || undefined,
		});

		await this.ormRepository.save(product);

		return product;
	}

	public async findByCode(productCode: string): Promise<Product | undefined> {
		const findProduct = await this.ormRepository.findOne({
			where: {
				productCode,
			},
		});

		return findProduct;
	}

	public async findByDescription(
		description: string,
	): Promise<Product | undefined> {
		const findProduct = await this.ormRepository.findOne({
			where: {
				description,
			},
		});

		return findProduct;
	}

	public async list(): Promise<Product[] | undefined> {
		const products = await this.ormRepository.find();

		return products;
	}

	// public async findAllById(products: IFindProducts[]): Promise<Product[]> {
	// 	const ids = products.map(product => product.id);

	// 	const orderProducts = await this.ormRepository.findByIds(ids);

	// 	return orderProducts;
	// }

	// public async updateQuantity(
	// 	products: IUpdateProductsQuantityDTO[],
	// ): Promise<Product[]> {
	// 	const updatedProducts = await Promise.all(
	// 		products.map(async product => {
	// 			const productFromDb = await this.ormRepository.findOne(product.id);

	// 			if (!productFromDb) {
	// 				throw new Error('product not found');
	// 			}

	// 			productFromDb.quantity -= product.quantity;

	// 			const updatedProduct = await this.ormRepository.save(productFromDb);

	// 			return updatedProduct;
	// 		}),
	// 	);

	// 	return updatedProducts;
	// }
}

export default ProductsRepository;
