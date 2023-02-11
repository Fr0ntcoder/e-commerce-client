import { useTypedSelector } from '@/store/useTypedSelector';

export const useCart = () => {
	const { items } = useTypedSelector((state) => state.cart);
	const total = items.reduce(
		(sum, el) => sum + el.product.price * el.quantity,
		0
	);
	return { items, total };
};
