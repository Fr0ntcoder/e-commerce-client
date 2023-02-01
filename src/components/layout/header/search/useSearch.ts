import { ChangeEvent, ChangeEventHandler, useState } from 'react';

export const useSearch = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return {
		handleSearch,
		searchValue
	};
};
