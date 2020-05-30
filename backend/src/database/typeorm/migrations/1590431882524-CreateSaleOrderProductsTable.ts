import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export default class CreateSaleOrderProductsTable1590431882524
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'saleOrderProducts',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'productCode',
						type: 'varchar',
					},
					{
						name: 'description',
						type: 'varchar',
					},
					{
						name: 'type',
						type: 'varchar',
					},
					{
						name: 'salePrice',
						type: 'decimal',
						precision: 5,
						scale: 2,
					},
					{
						name: 'quantity',
						type: 'int',
					},
					{
						name: 'points',
						type: 'int',
					},
					{
						name: 'mainImg',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'productId',
						type: 'uuid',
					},
					{
						name: 'saleOrderId',
						type: 'uuid',
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

		await queryRunner.createForeignKey(
			'saleOrderProducts',
			new TableForeignKey({
				name: 'OrderProductsDataFromSaleOrderTable',
				columnNames: ['saleOrderId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'saleOrders',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			}),
		);

		await queryRunner.createForeignKey(
			'saleOrderProducts',
			new TableForeignKey({
				name: 'OrderProductsDataFromProductsTable',
				columnNames: ['productId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'products',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'saleOrderProducts',
			'OrderProductsDataFromProductsTable',
		);

		await queryRunner.dropForeignKey(
			'saleOrderProducts',
			'OrderProductsDataFromSaleOrderTable',
		);

		await queryRunner.dropTable('saleOrderProducts');
	}
}
