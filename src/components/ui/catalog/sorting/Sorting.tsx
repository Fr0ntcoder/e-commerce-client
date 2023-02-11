import { FC } from 'react';
import Select from 'react-select';

import { sortingData } from '@/components/ui/catalog/sorting/sorting.data';
import { ISorting } from '@/components/ui/catalog/sorting/sorting.interface';

import styles from './Sorting.module.scss';

const Sorting: FC<ISorting> = ({ sort, setSort }) => {
	const handler = (newValue: any) => {
		setSort(newValue.label);
	};

	const getValue = () => {
		return sort ? sortingData.find((c) => c.value === sort) : '';
	};
	return (
		<div className={styles.wrap}>
			<div className={styles.select}>
				<Select
					defaultValue={sort}
					options={sortingData}
					value={getValue()}
					onChange={handler}
					classNamePrefix='react-select'
					className='react-select-container'
				/>
			</div>
		</div>
	);
};

export default Sorting;
