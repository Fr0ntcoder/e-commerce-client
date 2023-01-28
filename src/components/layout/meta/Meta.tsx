import Head from 'next/head';
import { FC } from 'react';

import { IMeta } from '@/components/layout/meta/meta.interface';

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.png' type='image/png' />
			{description ? (
				<meta itemProp='description' name='description' content={description} />
			) : (
				<meta name='robots' content='nonindex,nofollow' />
			)}
		</Head>
	);
};

export default Meta;
