import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IInitialStateModal } from '@/store/modal/modal.types';

const initialState: IInitialStateModal = {
	active: false,
	cartModal: false
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		changeCartModal: (state, action: PayloadAction<string>) => {
			state.active = !state.active;
			if (action.payload === 'cart') {
				state.cartModal = !state.cartModal;
			}
		}
	}
});
