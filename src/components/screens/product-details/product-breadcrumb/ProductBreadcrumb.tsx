import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ProductBreadcrumb.module.scss';
import { IProductDetails } from '@/@types/product.interface';

const ProductBreadcrumb: FC<IProductDetails> = ({ product }) => {
	return (
		<div className={styles.root}>
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href='/'>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>{product.name}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</div>
	);
};

export default ProductBreadcrumb;
