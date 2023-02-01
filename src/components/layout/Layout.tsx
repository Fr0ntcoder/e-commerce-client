import { FC, PropsWithChildren } from 'react';

import Header from '@/components/layout/header/Header';
import Meta from '@/components/layout/meta/Meta';
import { IMeta } from '@/components/layout/meta/meta.interface';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Header />
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
