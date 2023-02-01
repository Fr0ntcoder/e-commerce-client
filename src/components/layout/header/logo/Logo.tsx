import Image from 'next/image';
import { FC } from 'react';

import img from '@/assets/img/logo.png';

import styles from './Logo.module.scss';

const Logo: FC = () => {
	return <Image src={img} width={50} height={50} alt='logo' />;
};

export default Logo;
