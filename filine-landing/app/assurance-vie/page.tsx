import {subtitle, title} from "@/components/primitives";

export default function BlogPage() {
	return (
		<div>
			<h1 className={title({ color: "yellow" })}>Assurance vie </h1>
			<h2 className={subtitle({ class: "mt-4" })}>Pourquoi prendre une assurance vie ? </h2>
			<p>Assurance vie <br /> </p>
			<p>Assurance décès <br /> </p>
			<p>Assurance mix <br/> </p>
		</div>
	);
}
