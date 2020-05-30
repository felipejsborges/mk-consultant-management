import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePurchaseOrderTable1590432591307
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'purchaseOrders',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'date',
						type: 'timestamp',
					},
					{
						name: 'totalPrice',
						type: 'decimal',
						precision: 5,
						scale: 2,
					},
					{
						name: 'totalPoints',
						type: 'int',
					},
					{
						name: 'salePrice',
						type: 'decimal',
						precision: 5,
						scale: 2,
					},
					{
						name: 'discount',
						type: 'decimal',
						scale: 2,
					},
					{
						name: 'orderNumber',
						type: 'int',
					},
					{
						name: 'createdAt',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updatedAt',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('purchaseOrders');
	}
}
