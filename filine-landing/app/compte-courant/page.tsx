"use client"
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Tabs, Tab} from "@nextui-org/tabs";
import {CheckLogo} from "@/components/icons";


export default function AboutPage() {
	let tabs = [
		{
			id: "En ligne",
			label: "En ligne 🤖",
			content: "Avec Filine, dites adieu aux déplacements en agence et à l'attente interminable. Toutes vos opérations peuvent être effectuées en ligne, à tout moment et où que vous soyez."
		},
		{
			id: "Sécurité",
			label: "Sécurité 🔒",
			content: "Filine met un point d'honneur à assurer la sécurité de vos transactions et de vos données. Notre plateforme utilise les technologies de sécurité les plus avancées pour vous garantir une expérience bancaire sereine."
		},
		{
			id: "Économies",
			label: "Économies 💳",
			content: "Contrairement aux banques traditionnelles qui peuvent avoir de nombreux frais cachés, Filine se veut transparent et abordable. Nos coûts réduits en tant que banque en ligne se traduisent par des économies pour nos clients."
		},
		{
			id: "Epargne",
			label: "Epargne 💰",
			content: "Vous souhaitez mettre de l'argent de côté ? Avec Filine, ouvrir un compte d'épargne est un jeu d'enfant. En quelques clics, vous pouvez commencer à économiser pour vos projets futurs."
		}
	];
	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<div className="flex items-center justify-center">
					<h1 className={title( { color: "violet"} )}> Nos compte courants</h1>
				</div>

				<h2 className={subtitle()}> Pourquoi prendre un compte courant chez Filine ? </h2>
				<p className="my-4">
					Opter pour un compte courant chez Filine, c'est choisir la modernité, la simplicité et la sécurité. Voici quelques raisons qui font de Filine un choix judicieux pour vos besoins bancaires :
				</p>
			</div>
			<div className="inline-block max-w-2xl text-center justify-center">
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
			<div className="mt-8 text-center">
				<h2 className={title({ color: "violet"})}> Nos cartes : </h2>
				<div className="flex grid-cols-12 gap-8 mt-2">
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="text-tiny uppercase font-bold">MasterCard</p>
							<small className="text-left text-default-500">Carte Gratuite dés 5 utilisations par mois.</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								alt="Card background"
								className="object-cover rounded-xl"
								src="/carte_mastercard.png"

								width={400}
							/>
							<div className="grid items-center justify-left">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Paiement Gratuit a l&apos;international.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Sans conditions de revenus.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Carte en PVC Recyclé.</small>
								</div>
							</div>

						</CardBody>
					</Card>
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
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
							<div className="grid items-center justify-left mt-2">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Tout de la MASTERCARD.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurance Voyage.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Modulable selon vos besoins.</small>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex grid-cols-12 gap-8 mt-2">
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
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
							<div className="grid items-center justify-left">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Tout de la VISA CLASSIC.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Offre partenaire VISA.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurance voyages premium.</small>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
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
							<div className="grid items-center justify-left mt-1">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;TOUT DE LA VISA PREMIERE.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;CCV Evolutif.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurances Panne/Casse High-Tech.</small>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	);
}
