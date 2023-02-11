import { IProduct } from '@/@types/product.interface';
import { TypeSizes } from '@/store/cart/cart.types';

export interface ICartItem {
	id: number;
	product: IProduct;
	quantity: number;
	size: TypeSizes;
}
