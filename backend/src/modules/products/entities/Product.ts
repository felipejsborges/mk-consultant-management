import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
// import { Expose } from 'class-transformer';

import SaleOrderProducts from '@modules/saleOrders/entities/SaleOrderProducts';

@Entity('products')
class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	productCode: string;

	@Column()
	description: string;

	@Column()
	type: string;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
	})
	salePrice: number;

	@Column({ type: 'int' })
	quantity: number;

	@Column({ type: 'int' })
	points: number;

	@Column()
	mainImg: string;

	@OneToMany(
		() => SaleOrderProducts,
		saleOrderProducts => saleOrderProducts.product,
	)
	saleOrderProducts: SaleOrderProducts[];

	// @Expose({ name: 'mainImgURL' })
	// getMainImgUrl(): string | null {
	// 	return this.mainImg
	// 		? `${process.env.APP_API_URL}/files/${this.mainImg}`
	// 		: null;
	// 	}
	// }

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default Product;
