import cn from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';

import { ICarouselVariations } from '@/components/ui/catalog/carousel/carousel.interface';

import styles from './CarouselVariations.module.scss';
import { TypeSizes } from '@/store/cart/cart.types';

const SIZES: TypeSizes[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];
const CarouselVariations: FC<ICarouselVariations> = ({
	selected,
	setSelected
}) => {
	return (
		<div className={styles.list}>
			{SIZES.map((item) => (
				<button
					className={cn(styles.btn, {
						[styles.active]: selected === item
					})}
					key={item}
					onClick={() => setSelected(item)}
				>
					{item}
				</button>
			))}
		</div>
	);
};

export default CarouselVariations;
