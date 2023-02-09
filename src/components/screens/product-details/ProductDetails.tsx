import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProductBreadcrumb from '@/components/screens/product-details/product-breadcrumb/ProductBreadcrumb';
import Heading from '@/components/ui/heading/Heading';

import styles from './ProductDetails.module.scss';
import { IProductDetails } from '@/@types/product.interface';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading text={product.name} />
			<div className={styles.content}>
				<ProductBreadcrumb product={product} />
			</div>
		</Layout>
	);
};

export default ProductDetails;
