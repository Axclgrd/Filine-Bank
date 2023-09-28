"use client"
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Tabs, Tab} from "@nextui-org/tabs";

export default function AboutPage() {
	let tabs = [
		{
			id: "100% en ligne",
			label: "100% en ligne",
			content: "Avec Filine, dites adieu aux déplacements en agence et à l&apos;attente interminable. Toutes vos opérations peuvent être effectuées en ligne, à tout moment et où que vous soyez."
		},
		{
			id: "Sécurité renforcée",
			label: "Sécurité renforcée",
			content: "Filine met un point d&apos;honneur à assurer la sécurité de vos transactions et de vos données. Notre plateforme utilise les technologies de sécurité les plus avancées pour vous garantir une expérience bancaire sereine."
		},
		{
			id: "Économies garanties",
			label: "Économies garanties",
			content: "Contrairement aux banques traditionnelles qui peuvent avoir de nombreux frais cachés, Filine se veut transparent et abordable. Nos coûts réduits en tant que banque en ligne se traduisent par des économies pour nos clients."
		},
		{
			id: "Compte d&apos;épargne en quelques clics",
			label: "Compte d&apos;épargne en quelques clics",
			content: "Vous souhaitez mettre de l&apos;argent de côté ? Avec Filine, ouvrir un compte d&apos;épargne est un jeu d&apos;enfant. En quelques clics, vous pouvez commencer à économiser pour vos projets futurs."
		},
		{
			id: "Intégrez votre assurance vie",
			label: "Intégrez votre assurance vie",
			content: "En plus des services bancaires standards, Filine vous offre la possibilité d&apos;intégrer votre assurance vie Filine directement à votre compte, simplifiant ainsi la gestion de vos finances."
		},
		{
			id: "Bientôt, les crypto-monnaies",
			label: "Bientôt, les crypto-monnaies",
			content: "Toujours à la pointe de l&apos;innovation, Filine envisage prochainement d&apos;introduire la possibilité d&apos;acheter des crypto-monnaies directement depuis votre compte. Une façon pour nos clients de diversifier leurs investissements et de rester à la pointe de la technologie financière."
		}
	];
    return (
	<div className="min-w-full">
		<h1 className={title( { color: "violet"} )}> Nos compte courants </h1>

		<h2 className={subtitle()}> Pourquoi prendre un compte courant chez Filine ? </h2>

		<div className="w-4/5 mx-auto text-lg leading-relaxed text-left">
			<p className="my-4">
				Opter pour un compte courant chez Filine, c&apos;est choisir la modernité, la simplicité et la sécurité. Voici quelques raisons qui font de Filine un choix judicieux pour vos besoins bancaires :
			</p>
			<div className="flex w-full flex-col">
				<Tabs aria-label="Dynamic tabs" items={tabs}>
					{(item) => (
						<Tab key={item.id} title={item.label}>
							<Card>
								<CardBody>
									{item.content}
								</CardBody>
							</Card>
						</Tab>
					)}
				</Tabs>
			</div>
			<p>En somme, choisir Filine, c&apos;est opter pour une banque qui comprend les besoins du 21ème siècle, tout en mettant l&apos;accent sur la simplicité, la sécurité et l&apos;innovation. Rejoignez-nous et découvrez une nouvelle façon de gérer votre argent.</p>
		</div>
		<Divider className="my-4 mt-8" />
		<h2 className={title({ color: "violet"})}> Nos cartes : </h2>
		<div className="justify-center flex gap-8 mt-4">
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">MasterCard</p>
					<small className="text-default-500">Carte Gratuite dés 5 utilisations par mois.</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/carte_mastercard.png"

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
						src="/visa_classic.png"

						width={400}
					/>
				</CardBody>
			</Card>
		</div>
		<div className="justify-center flex gap-8 mt-2">
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">Visa Premiére</p>
					<small className="text-default-500">Dés 10€ par mois</small>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/visa_premiere.png"

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
						src="/visa_infinite.png"

						width={400}
					/>
				</CardBody>
			</Card>
		</div>

	</div>

);
}
