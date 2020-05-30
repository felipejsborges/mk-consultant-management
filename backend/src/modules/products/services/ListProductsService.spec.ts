// import AppError from '../../../errors/AppError';
import FakeProductsRepository from '../repositories/FakeProductsRepository';
import CreateProductService from './CreateProductService.ts';
import ListProductsService from './ListProductsService';

let fakeProductsRepository: FakeProductsRepository;
let listProducts: ListProductsService;
let createProduct: CreateProductService;

describe('ListProducts', () => {
	beforeEach(() => {
		fakeProductsRepository = new FakeProductsRepository();
		createProduct = new CreateProductService(fakeProductsRepository);
		listProducts = new ListProductsService(fakeProductsRepository);
	});

	it('should be able to lsit all products', async () => {
		const product1 = await createProduct.execute({
			productCode: '1111',
			description: 'description1',
			type: 'type',
			salePrice: 100,
			quantity: 5,
			points: 10,
			mainImg: 'dir/img.png',
		});

		const product2 = await createProduct.execute({
			productCode: '2222',
			description: 'description2',
			type: 'type',
			salePrice: 100,
			quantity: 5,
			points: 10,
			mainImg: 'dir/img.png',
		});

		const products = await listProducts.execute();

		expect(products).toEqual([product1, product2]);
	});
});
