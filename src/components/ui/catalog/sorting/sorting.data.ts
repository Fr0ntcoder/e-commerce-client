import {
	EnumSorting,
	ISortingItem
} from '@/components/ui/catalog/sorting/sorting.interface';

export const sortingData: ISortingItem[] = [
	{
		label: 'Новые',
		value: EnumSorting.NEWEST
	},
	{
		label: 'Старые',
		value: EnumSorting.OLDEST
	},
	{
		label: 'Цена: по убыванию',
		value: EnumSorting.HIGT_TO_LOW_PRICE
	},
	{
		label: 'Цена: по возрастанию',
		value: EnumSorting.LOW_TO_HIGH_PRICE
	}
];
