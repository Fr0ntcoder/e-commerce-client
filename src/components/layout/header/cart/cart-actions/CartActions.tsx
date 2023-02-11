import { FC, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import styles from './CartActions.module.scss';
import { ICartItem } from '@/@types/cart.interface';
import { useActions } from '@/store/useActions';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions();
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.btn}
				disabled={item.quantity === 1}
				onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
			>
				-
			</button>
			<input
				type='text'
				value={item.quantity}
				onChange={(e) => item.quantity}
				className={styles.value}
			/>
			<button
				className={styles.btn}
				onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
			>
				+
			</button>
			<button className={styles.remove} onClick={() => removeFromCart(item.id)}>
				<FaTrash />
			</button>
		</div>
	);
};

export default CartActions;
