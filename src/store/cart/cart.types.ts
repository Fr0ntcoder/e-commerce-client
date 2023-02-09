import { ICartItem } from '../../@types/cart.interface';

export interface IInitialState {
	items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantity extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus';
}
export type TypeSizes = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI';

export interface IChangeSizePlayload extends Pick<ICartItem, 'id'> {
	size: TypeSizes;
}
