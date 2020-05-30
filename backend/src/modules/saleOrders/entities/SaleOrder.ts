import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';

import SaleOrderProducts from './SaleOrderProducts';

@Entity('saleOrders')
class SaleOrder {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn()
	date: Date;

	@Column()
	customer: string;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
	})
	totalPrice: number;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
	})
	realTotalPrice: number;

	@OneToMany(
		() => SaleOrderProducts,
		saleOrderProducts => saleOrderProducts.saleOrder,
		{
			cascade: ['insert'],
			eager: true,
		},
	)
	saleOrderProducts: SaleOrderProducts[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default SaleOrder;
