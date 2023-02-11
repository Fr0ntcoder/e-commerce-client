import { useTypedSelector } from '@/store/useTypedSelector';

export const useModal = () => {
	const { active, cartModal } = useTypedSelector((state) => state.modal);

	return {
		active,
		cartModal
	};
};
