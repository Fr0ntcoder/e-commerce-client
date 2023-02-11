import { FC } from 'react';

import styles from './Heading.module.scss';

const Heading: FC<{ text: string }> = ({ text }) => {
	return (
		<div className={styles.title}>
			<h2>{text}</h2>
		</div>
	);
};

export default Heading;
