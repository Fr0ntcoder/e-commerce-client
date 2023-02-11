import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/ui/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';

import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<Layout title='Главная'>
			<Heading text='The happiest hour of the year' />
			<Catalog />
		</Layout>
	);
};

export default Home;
