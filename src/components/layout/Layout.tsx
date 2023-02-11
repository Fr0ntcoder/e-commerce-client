import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import Header from '@/components/layout/header/Header';
import Meta from '@/components/layout/meta/Meta';
import { IMeta } from '@/components/layout/meta/meta.interface';
import CartModal from '@/components/ui/modal/cart-modal/CartModal';

import styles from './Layout.module.scss';
import { useModal } from '@/store/modal/useModal';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	const { active, cartModal } = useModal();
	return (
		<>
			<Meta {...meta} />
			<div className={styles.wrapper}>
				<div
					className={cn(styles.modal, {
						[styles.active]: active
					})}
				>
					{cartModal && <CartModal />}
				</div>
				<div className={styles.container}>
					<Header />
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
