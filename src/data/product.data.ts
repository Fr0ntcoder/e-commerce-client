import { IProduct } from '@/@types/product.interface';

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Caramel Brulée Latte',
		description:
			'Our signature espresso, steamed milk and rich caramel brulée sauce finished with whipped cream and a supreme topping of even more caramel brulée bits.',
		images: ['/Caramel Brulée Latte.png'],
		price: 120,
		reviews: []
	},
	{
		id: 2,
		name: 'Caffè Mocha',
		description:
			'Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.',
		images: ['/Caffè Mocha.png'],
		price: 150,
		reviews: []
	},
	{
		id: 3,
		name: 'Cappuccino',
		description:
			'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.',
		images: ['/Cappuccino.png'],
		price: 110,
		reviews: []
	},
	{
		id: 4,
		name: 'Pistachio Latte',
		description:
			'Cozy flavors of sweet pistachio and a brown-buttery topping paired with espresso and steamed milk, specially crafted to keep you comforted in the new year.',
		images: ['/Pistachio Latte.png'],
		price: 180,
		reviews: []
	},
	{
		id: 5,
		name: 'Caramel Macchiato',
		description:
			'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.',
		images: ['/Caramel Macchiato.png'],
		price: 185,
		reviews: []
	},
	{
		id: 6,
		name: 'Cinnamon Dolce Latte',
		description:
			'We add freshly steamed milk and cinnamon dolce-flavored syrup to our classic espresso, topped with sweetened whipped cream and a cinnamon dolce topping to bring you specialness in a treat.',
		images: ['/Cinnamon Dolce Latte.png'],
		price: 165,
		reviews: []
	},
	{
		id: 7,
		name: 'Peppermint White Chocolate Mocha',
		description:
			'Rich espresso meets a trio of white chocolate sauce, peppermint-flavored syrup and steamed milk, topped with sweet whipped cream and dark-chocolate curls—an oh-so-delightfully merry treat.',
		images: ['/Peppermint White Chocolate Mocha.png'],
		price: 145,
		reviews: []
	}
];
