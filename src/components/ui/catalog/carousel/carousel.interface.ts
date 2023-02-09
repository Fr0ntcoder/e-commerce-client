import { Dispatch, SetStateAction } from 'react';

import { IProduct } from '@/@types/product.interface';
import { TypeSizes } from '@/store/cart/cart.types';

export interface ICarouselItem {
	product: IProduct;
	index: number;
}

export interface ICarouselVariations {
	id: number;
	selected: TypeSizes;
	setSelected: Dispatch<SetStateAction<TypeSizes>>;
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
	active: boolean;
}
