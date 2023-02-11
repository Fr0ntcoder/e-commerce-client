import { IProduct } from '@/@types/product.interface';

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Caramel Brulée Latte',
		description: 'Calories Total Fat 8g Saturated Fat 5g Trans Fat 0mg 10% 25%',
		slug: 'caramel-brulée-latte',
		images: [
			'/Caramel Brulée Latte1.png',
			'/Caramel Brulée Latte2.png',
			'/Caramel Brulée Latte3.png'
		],
		price: 120,
		reviews: []
	},
	{
		id: 2,
		name: 'Caffè Mocha',
		description: 'Calories Total Fat 9g Saturated Fat 6g Trans Fat 0mg 12% 30%',
		slug: 'caffè-mocha',
		images: ['/Caffè Mocha1.png', '/Caffè Mocha2.png', '/Caffè Mocha3.png'],
		price: 150,
		reviews: []
	},
	{
		id: 3,
		name: 'Cappuccino',
		description:
			'Calories Total Fat 4g Saturated Fat 2.5g Trans Fat 0mg 5% 13%',
		slug: 'cappuccino',
		images: ['/Cappuccino1.png', '/Cappuccino2.png', '/Cappuccino3.png'],
		price: 110,
		reviews: []
	},
	{
		id: 4,
		name: 'Pistachio Latte',
		description: 'Calories Total Fat 9g Saturated Fat 5g Trans Fat 0mg 12% 25%',
		slug: 'pistachio-latte',
		images: [
			'/Pistachio Latte1.png',
			'/Pistachio Latte2.png',
			'/Pistachio Latte3.png'
		],
		price: 180,
		reviews: []
	}
	/* 	{
		id: 5,
		name: 'Caramel Macchiato',
		description:
			'Calories Total Fat 7g Saturated Fat 4.5g Trans Fat 0mg 9% 23%',
		images: ['/Caramel Macchiato.png'],
		price: 185,
		reviews: []
	},
	{
		id: 6,
		name: 'Cinnamon Dolce Latte',
		description:
			'Calories Total Fat 14g Saturated Fat 9g Trans Fat 0.5mg 18% 45%',
		images: ['/Cinnamon Dolce Latte.png'],
		price: 165,
		reviews: []
	},
	{
		id: 7,
		name: 'Peppermint White Chocolate Mocha',
		description:
			'Calories Total Fat 18g Saturated Fat 12g Trans Fat 0mg 23% 60%',
		images: ['/Peppermint White Chocolate Mocha.png'],
		price: 145,
		reviews: []
	} */
];
