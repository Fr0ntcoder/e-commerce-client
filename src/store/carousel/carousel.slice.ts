import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { products } from '@/data/product.data';
import { IInitialState } from '@/store/carousel/carousel.types';

const initialState: IInitialState = {
	carouselIndex: 0
};

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide(state) {
			if (state.carouselIndex < products.length - 1) {
				state.carouselIndex += 1;
			}
		},
		prevSlide(state) {
			if (state.carouselIndex > 0) {
				state.carouselIndex -= 1;
			}
		},
		activeSlide(state, action: PayloadAction<number>) {
			state.carouselIndex = action.payload;
		}
	}
});
