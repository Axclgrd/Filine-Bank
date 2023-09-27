import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {title} from "@/components/primitives";

export default function AboutPage() {
    return (
	<div>
		<h2 className={title()}> Nos cartes : </h2>
		<div className=" flex gap-8 mt-2">
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">MasterCard</p>
					<small className="text-default-500">Carte Gratuite dés 5 utilisations par mois.</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/carte_mastercard.jpeg"

						width={400}
					/>
				</CardBody>
			</Card>
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">Visa Classic</p>
					<small className="text-default-500">Dés 5€ par mois</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/visa_classique.png"

						width={400}
					/>
				</CardBody>
			</Card>
		</div>
		<div className=" flex gap-8 mt-2">
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">Visa Premiére</p>
					<small className="text-default-500">Dés 10€ par mois</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/visa_premiere.jpeg"

						width={400}
					/>
				</CardBody>
			</Card>
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">Visa Infinite</p>
					<small className="text-default-500">Dés 20€ par mois</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/visa_infinite.jpeg"

						width={400}
					/>
				</CardBody>
			</Card>
		</div>

	</div>

);
}
