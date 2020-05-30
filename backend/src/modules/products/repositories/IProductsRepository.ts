import Product from '../entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';
// import IUpdateProductsQuantityDTO from '../dtos/IUpdateProductsQuantityDTO';

// export default interface IUpdateProductsQuantityDTO {
//   id: string;
//   quantity: number;
// }

// interface IFindProducts {
// 	id: string;
// }

export default interface IProductsRepository {
	create({
		productCode,
		description,
		type,
		salePrice,
		quantity,
		points,
		mainImg,
	}: ICreateProductDTO): Promise<Product>;
	findByCode(productCode: string): Promise<Product | undefined>;
	findByDescription(description: string): Promise<Product | undefined>;
	list(): Promise<Product[] | undefined>;
	// findAllById(products: IFindProducts[]): Promise<Product[]>;
	// updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
}
