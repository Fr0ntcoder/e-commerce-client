import Link from 'next/link';
import { FC } from 'react';

import { IMenuLink } from '@/components/layout/header/menu/menu-item/menu.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuLink }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link href={item.link} className={styles.link}>
				{item.text}
			</Link>
		</li>
	);
};

export default MenuItem;
