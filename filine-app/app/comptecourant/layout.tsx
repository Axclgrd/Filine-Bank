export default function CCPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div>
				{children}
			</div>
		</section>
	);
}
