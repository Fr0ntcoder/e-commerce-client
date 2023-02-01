export const priceFormat = (n: number) => {
	return Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB'
	}).format(n);
};
