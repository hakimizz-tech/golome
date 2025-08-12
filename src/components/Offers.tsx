import { Truck, CreditCard, ShoppingBasket, HeartHandshake } from 'lucide-react'

const features = [
	{
		title: 'Free Shipping',
		desc: 'Enjoy free shipping on everything.',
		Icon: Truck,
	},
	{
		title: 'Secure Payment',
		desc: 'Fast, safe, and secure payments.',
		Icon: CreditCard,
	},
	{
		title: 'Seamless Shopping',
		desc: 'Smooth, easy, and convenient.',
		Icon: ShoppingBasket,
	},
	{
		title: 'Money Back Guarantee',
		desc: 'Not satisfied? Just return it to us.',
		Icon: HeartHandshake,
	},
]

function Offers() {
	return (
		<section className="w-full bg-black text-white">
			<div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
				{features.map(({ title, desc, Icon }) => (
					<div
						key={title}
						className="flex flex-col items-center text-center gap-4 group"
					>
						<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
							<Icon className="w-7 h-7 text-black" aria-hidden="true" />
						</div>
						<p className="font-semibold tracking-wide">{title}</p>
						<p className="text-sm leading-relaxed text-gray-300">{desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Offers