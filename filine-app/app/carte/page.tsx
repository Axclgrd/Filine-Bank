import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Switch} from "@nextui-org/switch";

export default function CartePage() {
	return (
		<div  className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
			<h1 className={title()}>Carte</h1>
			<h2 className={subtitle()}> Visa Infinite</h2>
			<Divider />
			<Image
				isBlurred
				src="/visa_infinite.png"
				alt="NextUI Album Cover"
				className={"mt-5 w-96 h-50"}
			/>
			<div className="mt-5">
				<div className="flex place-content-around">
					<p>Verrouillage temporaire</p>
					<Switch aria-label="Verroullage temporaire"/>
				</div>
				<Divider className="mt-3"/>



			</div>
		</div>
	);
}
