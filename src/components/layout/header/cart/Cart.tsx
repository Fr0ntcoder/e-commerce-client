import { FC, useState } from 'react';

import CartItem from '@/components/layout/header/cart/cart-item/CartItem';

import { useOutside } from '@/hooks/useOutside';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { priceFormat } from '../../../../utils/price-format.utils';

import styles from './Cart.module.scss';

const Cart: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);
	const cart = useTypedSelector((state) => state.cart.items);
	return (
		<div className={styles.wrapper} ref={ref}>
			<span className={styles.heading} onClick={() => setIsShow(!isShow)}>
				<span className={styles.badge}>1</span>
				<div className={styles.text}>Моя корзина</div>
			</span>
			{isShow && (
				<div className={styles.cart}>
					{cart.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
					<div className={styles.bottom}>
						<div className={styles.price}>
							<h5 className={styles['price-title']}>Общая сумма:</h5>
							<span className={styles['price-text']}>{priceFormat(100)}</span>
						</div>
						<button className={styles.btn}>Проверить</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
