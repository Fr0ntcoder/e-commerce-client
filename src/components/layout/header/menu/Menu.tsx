import { FC } from 'react';

import MenuItem from '@/components/layout/header/menu/menu-item/MenuItem';
import { menu } from '@/components/layout/header/menu/menu.data';

import styles from './Menu.module.scss';

const Menu: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{menu?.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
