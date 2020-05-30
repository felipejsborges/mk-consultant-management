import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProductsTable1590430896888
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'products',
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
						isUnique: true,
					},
					{
						name: 'description',
						type: 'varchar',
						isUnique: true,
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
		await queryRunner.dropTable('products');
	}
}
