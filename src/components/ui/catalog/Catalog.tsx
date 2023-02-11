import { FC, useState } from 'react';

import Carousel from '@/components/ui/catalog/carousel/Carousel';
import Sorting from '@/components/ui/catalog/sorting/Sorting';
import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface';

import styles from './Catalog.module.scss';
import { products } from '@/data/product.data';

const Catalog: FC = () => {
	const [sort, setSort] = useState<EnumSorting>(EnumSorting.NEWEST);
	return (
		<>
			<Sorting sort={sort} setSort={setSort} />
			<Carousel products={products} />
		</>
	);
};

export default Catalog;
