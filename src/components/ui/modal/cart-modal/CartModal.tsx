import { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import CartItem from '@/components/layout/header/cart/cart-item/CartItem';

import { useOutside } from '@/hooks/useOutside';

import { priceFormat } from '@/utils/price-format.utils';

import styles from './CartModal.module.scss';
import { useCart } from '@/store/cart/useCart';
import { useTypedSelector } from '@/store/useTypedSelector';

const CartModal: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);
	const { items, total } = useCart();
	return (
		<>
			<div className={styles.cart} ref={ref}>
				<h3 className={styles.title}>Корзина</h3>
				{items.length != 0 ? (
					<>
						{items.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
						<div className={styles.bottom}>
							<div className={styles.price}>
								<h5 className={styles['price-title']}>Общая сумма:</h5>
								<span className={styles['price-text']}>
									{priceFormat(total)}
								</span>
							</div>
							<button className={styles.btn}>Проверить</button>
						</div>
					</>
				) : (
					<div className={styles.empty}>
						<FaShoppingCart />
						<h3 className={styles['empty-title']}>Корзина пустая</h3>
					</div>
				)}
			</div>
		</>
	);
};

export default CartModal;
