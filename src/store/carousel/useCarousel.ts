import { useTypedSelector } from '@/store/useTypedSelector';

export const useCarousel = () => {
	const { carouselIndex } = useTypedSelector((state) => state.carousel);

	return {
		carouselIndex
	};
};
