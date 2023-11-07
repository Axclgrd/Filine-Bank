export default function TransactionPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center gap-4">
			<div className=" mx-auto md:text-left">
				{children}
			</div>
		</section>
	);
}
