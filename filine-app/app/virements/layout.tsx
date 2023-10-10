export default function VirementPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center gap-4 md:py-10 2xl">
			<div className="max-w-lg mx-auto md:text-left lg:max-w-xl">
				{children}
			</div>
		</section>
	);
}
