import cn from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';

import CarouselNavigation from '@/components/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import CarouselVariations from '@/components/ui/catalog/carousel/carousel-item/carousel-variations/CarouselVariations';
import { ICarouselItem } from '@/components/ui/catalog/carousel/carousel.interface';

import styles from './CarouselItem.module.scss';
import { useCarousel } from '@/store/carousel/useCarousel';
import { TypeSizes } from '@/store/cart/cart.types';
import { useCart } from '@/store/cart/useCart';
import { useActions } from '@/store/useActions';

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selected, setSelected] = useState<TypeSizes>('GRANDE');
	const { items } = useCart();
	const currentElement = items.find(
		(item) => item.product.id === product.id && item.size === selected
	);
	const { addToCart, removeFromCart } = useActions();
	const { carouselIndex } = useCarousel();
	const { activeSlide } = useActions();
	const isActive = carouselIndex === index;
	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			{' '}
			<CarouselNavigation product={product} active={isActive} />
			<div className={styles.content} onClick={() => activeSlide(index)}>
				<h3
					className={cn(styles.title, {
						[styles.active]: isActive
					})}
				>
					{product.name}
				</h3>
				{!isActive && (
					<p
						className={cn(styles.text, {
							[styles.active]: isActive
						})}
					>
						{product.description}
					</p>
				)}
				{isActive && (
					<>
						<CarouselVariations
							id={product.id}
							selected={selected}
							setSelected={setSelected}
						/>
						<button
							className={styles.btn}
							onClick={() =>
								currentElement
									? removeFromCart(currentElement.id)
									: addToCart({ product, quantity: 1, size: selected })
							}
						>
							{currentElement ? 'Удалить из корзины' : 'Добавить в корзину'}
						</button>
						<Link className={styles.link} href={`/product/${product.slug}`}>
							Перейти на страницу товара
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default CarouselItem;
