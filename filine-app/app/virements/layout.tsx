export default function VirementPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 md:py-10">
			<div className="max-w-lg mx-auto text-center md:text-left lg:max-w-xl">
				{children}
			</div>
		</section>
	);
}
