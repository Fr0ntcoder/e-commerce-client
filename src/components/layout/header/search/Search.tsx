import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import Field from '@/components/ui/field/Field';

import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const { handleSearch, searchValue } = useSearch();
	return (
		<Field
			type='search'
			className={styles.input}
			Icon={FaSearch}
			value={searchValue}
			onChange={handleSearch}
			placeholder='Поиск'
		/>
	);
};

export default Search;
