import Image from 'next/image';
import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { ICarouselNavigation } from '@/components/ui/catalog/carousel/carousel.interface';

import styles from './CarouselNavigation.module.scss';
import { useActions } from '@/store/useActions';

const CarouselNavigation: FC<ICarouselNavigation> = ({ product, active }) => {
	const { nextSlide, prevSlide } = useActions();
	return (
		<div className={styles.nav}>
			{active && (
				<div className={styles.btn}>
					<button className={styles['btn-prev']} onClick={() => prevSlide()}>
						<FaAngleLeft />
					</button>
					<button className={styles['btn-next']} onClick={() => nextSlide()}>
						<FaAngleRight />
					</button>
				</div>
			)}
			<span className={styles.img}>
				<Image src={product.images[0]} alt={product.name} fill />
			</span>
		</div>
	);
};

export default CarouselNavigation;
