import { Dispatch, SetStateAction } from 'react';

export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
	HIGT_TO_LOW_PRICE = 'HIGT_TO_LOW_PRICE',
	NEWEST = 'NEWEST',
	OLDEST = 'OLDEST'
}
export interface ISorting {
	sort: EnumSorting;
	setSort: Dispatch<SetStateAction<EnumSorting>>;
}

export interface ISortingItem {
	label: 'Цена: по убыванию' | 'Цена: по возрастанию' | 'Новые' | 'Старые';
	value: EnumSorting;
}
