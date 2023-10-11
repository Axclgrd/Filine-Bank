export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col  items-center justify-center  py-8 ">
			<div className="inline-block  text-center justify-center">
				{children}
			</div>
		</section>
	);
}
