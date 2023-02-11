import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import img from '@/assets/img/logo.png';

import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href='/'>
			<Image src={img} width={50} height={50} alt='logo' />
		</Link>
	);
};

export default Logo;
