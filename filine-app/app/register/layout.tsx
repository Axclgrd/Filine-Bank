export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex w-full items-center justify-center   ">
			<div className="text-center justify-center">
				{children}
			</div>
		</section>
	);
}
