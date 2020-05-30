import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('purchaseOrders')
class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn()
	date: Date;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
	})
	totalPrice: number;

	@Column()
	totalPoints: number;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
	})
	salePrice: number;

	@Column({
		type: 'decimal',
		scale: 2,
	})
	discount: number;

	@Column()
	orderNumber: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default Product;
