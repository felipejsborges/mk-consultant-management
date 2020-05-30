export default interface ICreateProductDTO {
	productCode: string;
	description: string;
	type: string;
	salePrice: number;
	quantity: number;
	points: number;
	mainImg: string | null;
}
