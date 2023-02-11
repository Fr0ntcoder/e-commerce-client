import { FC } from 'react';

import CartItem from '@/components/layout/header/cart/cart-item/CartItem';

import { useOutside } from '@/hooks/useOutside';

import { priceFormat } from '@/utils/price-format.utils';

import styles from './Cart.module.scss';
import { useCart } from '@/store/cart/useCart';
import { useActions } from '@/store/useActions';
import { useTypedSelector } from '@/store/useTypedSelector';

const Cart: FC = () => {
	const { items } = useCart();
	const { changeCartModal } = useActions();
	return (
		<div className={styles.wrapper}>
			<span className={styles.heading} onClick={() => changeCartModal('cart')}>
				<span className={styles.badge}>{items.length}</span>
				<div className={styles.text}>Моя корзина</div>
			</span>
		</div>
	);
};

export default Cart;
