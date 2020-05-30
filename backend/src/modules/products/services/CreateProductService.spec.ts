import AppError from '../../../errors/AppError';
import FakeProductsRepository from '../repositories/FakeProductsRepository';
import CreateProductService from './CreateProductService.ts';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProducts', () => {
	beforeEach(() => {
		fakeProductsRepository = new FakeProductsRepository();
		createProduct = new CreateProductService(fakeProductsRepository);
	});

	it('should be able to create a new product', async () => {
		const product = await createProduct.execute({
			productCode: '1234',
			description: 'batom vermelho',
			type: 'batom',
			salePrice: 100,
			quantity: 5,
			points: 10,
			mainImg: 'dir/img.png',
		});

		expect(product).toHaveProperty('id');
		expect(product.productCode).toBe('1234');
		expect(product.description).toBe('batom vermelho');
		expect(product.type).toBe('batom');
		expect(product.salePrice).toBe(100);
		expect(product.quantity).toBe(5);
		expect(product.points).toBe(10);
		expect(product.mainImg).toBe('dir/img.png');
	});

	it('should not be able to create a new product with same code', async () => {
		await createProduct.execute({
			productCode: 'same-code',
			description: 'any-descr',
			type: 'batom',
			salePrice: 100,
			quantity: 5,
			points: 10,
			mainImg: 'dir/img.png',
		});

		await expect(
			createProduct.execute({
				productCode: 'same-code',
				description: 'other-descr',
				type: 'batom',
				salePrice: 100,
				quantity: 5,
				points: 10,
				mainImg: 'dir/img.png',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create a new product with same description', async () => {
		await createProduct.execute({
			productCode: 'any-code',
			description: 'same-descr',
			type: 'batom',
			salePrice: 100,
			quantity: 5,
			points: 10,
			mainImg: 'dir/img.png',
		});

		await expect(
			createProduct.execute({
				productCode: 'other-code',
				description: 'same-descr',
				type: 'batom',
				salePrice: 100,
				quantity: 5,
				points: 10,
				mainImg: 'dir/img.png',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
