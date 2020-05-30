import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSaleOrdersTable1590431546366
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'saleOrders',
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
						name: 'customer',
						type: 'varchar',
					},
					{
						name: 'totalPrice',
						type: 'decimal',
						precision: 5,
						scale: 2,
					},
					{
						name: 'realTotalPrice',
						type: 'decimal',
						precision: 5,
						scale: 2,
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
		await queryRunner.dropTable('saleOrders');
	}
}
