import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';

import Product from '@modules/products/entities/Product';
import SaleOrder from './SaleOrder';

@Entity('saleOrderProducts')
class SaleOrderProducts {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ManyToOne(() => SaleOrder, saleOrder => saleOrder.saleOrderProducts)
	@JoinColumn([{ name: 'saleOrderId', referencedColumnName: 'id' }])
	saleOrder: SaleOrder;

	@ManyToOne(() => Product, product => product.saleOrderProducts)
	@JoinColumn([{ name: 'productId', referencedColumnName: 'id' }])
	product: SaleOrder;

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

	@Column()
	productId: string;

	@Column()
	saleOrderId: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default SaleOrderProducts;
