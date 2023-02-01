import { FC, useState } from 'react';

import CartItem from '@/components/layout/header/cart/cart-item/CartItem';

import { useOutside } from '@/hooks/useOutside';

import styles from './Cart.module.scss';
import { cart } from '@/data/cart.data';

const Cart: FC = () => {
	/* const [isOpen, setIsOpen] = useState(false); */
	const { ref, setIsShow, isShow } = useOutside(false);
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
						<button className={styles.btn}>Проверить</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
