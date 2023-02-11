import { FC, useState } from 'react';

import CarouselItem from '@/components/ui/catalog/carousel/carousel-item/CarouselItem';

import styles from './Carousel.module.scss';
import { IProduct } from '@/@types/product.interface';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<ul className={styles.list}>
			{products?.map((item, index) => (
				<CarouselItem product={item} key={item.id} index={index} />
			))}
		</ul>
	);
};

export default Carousel;
