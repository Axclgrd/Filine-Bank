import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Switch} from "@nextui-org/switch";
import {AddtoWallet, Arrow, Mastercard, Visa} from "@/components/icons";
import React from "react";

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
				<div className="flex justify-between">
					<p>Verrouillage temporaire</p>
					<Switch aria-label="Verroullage temporaire"/>
				</div>
				<Divider className="mt-3"/>
				<div className="mt-2 mb-2 flex justify-between">
					<p>Caractéristique de ma carte</p>
					<Arrow />
				</div>

				<Divider className="mt-0"/>

				<div className="mt-2 mb-2 flex justify-between">
					<div className="inline-flex items-center">
						<Visa />
						<p>&nbsp;Décrouvir les offres Visa</p>
					</div>
					<Arrow />
				</div>

				<Divider className="mt-0"/>


			</div>
		</div>
	);
}
