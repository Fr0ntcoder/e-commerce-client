import Image from 'next/image';
import { FC } from 'react';

import { priceFormat } from '@/utils/price-format.utils';

import styles from './CartItem.module.scss';
import { ICartItem } from '@/@types/cart.interface';
import { IProduct } from '@/@types/product.interface';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div className={styles.content}>
				<h3 className={styles.title}>{item.product.name}</h3>
				<span className={styles.price}>{priceFormat(item.product.price)}</span>
			</div>
		</div>
	);
};

export default CartItem;
