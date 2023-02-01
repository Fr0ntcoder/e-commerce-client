import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../@types/product.interface';

import { cart } from '@/data/cart.data';
import { IAddToCartPayload, IInitialState } from '@/store/types';

const initialState: IInitialState = {
	items: cart
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const id = state.items.length;
			state.items.push({ ...action.payload, id });
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item) => item.product.id !== action.payload
			);
		}
	}
});
