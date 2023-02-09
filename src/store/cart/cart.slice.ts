import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cart } from '@/data/cart.data';
import {
	IAddToCartPayload,
	IChangeQuantity,
	IInitialState
} from '@/store/cart/cart.types';

const initialState: IInitialState = {
	items: cart
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isSize = state.items.some(
				(item) => item.size === action.payload.size
			);
			if (!isSize) {
				state.items.push({ ...action.payload, id: state.items.length });
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
			const { id, type } = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				type === 'plus'
					? item.quantity++
					: item.quantity >= 0
					? item.quantity--
					: 0;
			}
		}
	}
});
