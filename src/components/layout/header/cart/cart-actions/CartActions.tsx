import { FC, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useActions } from '@/hooks/useActions';

import styles from './CartActions.module.scss';
import { ICartItem } from '@/@types/cart.interface';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	let [counter, setCounter] = useState(1);
	const { removeFromCart } = useActions();
	const increment = () => {
		if (counter > 1) setCounter(counter - 1);
	};
	const decrement = () => {
		setCounter(counter + 1);
	};
	return (
		<div className={styles.wrapper}>
			<button className={styles.btn} onClick={increment}>
				-
			</button>
			<input
				type='text'
				value={counter}
				onChange={(e) => setCounter(+e.target.value)}
				className={styles.value}
			/>
			<button className={styles.btn} onClick={decrement}>
				+
			</button>
			<button className={styles.remove} onClick={() => removeFromCart(item.id)}>
				<FaTrash />
			</button>
		</div>
	);
};

export default CartActions;
