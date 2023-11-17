"use client"
import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Tabs, Tab} from "@nextui-org/tabs";


export default function DocsPage() {
	return (
		<>
			<h1 className={title({color: "pink"})}> Nos Mutuelles</h1>
			<p className="my-4 text-left">
				Chez Filine Mutuelle, nous comprenons l'importance de la santé et du bien-être de nos adhérents, c'est
				pourquoi nous proposons une gamme complète de plans d'assurance santé personnalisés adaptés aux besoins
				individuels et familiaux.
			</p>
			<p className="my-p4 text-left mb-4">
				Nos plans comprennent la prise en charge de diverses dépenses de santé, telles
				que les consultations médicales, les médicaments, les soins dentaires, les frais d'hospitalisation et
				bien plus encore.
			</p>
			<h1 className={title({color: "pink"})}> Nos Offres</h1> <br/>
			<Tabs aria-label="Options" className="mt-6">
				<Tab key="Cobalt" title="Cobalt👨🏻">
					<Card>
						<CardBody>
							<div className="ml2">Forfait Cobalt</div>

							<li className="my-2"><span className="font-bold"></span> Couverture : <br/>
								Ce forfait offre une couverture de base pour les soins de santé essentiels, y
								compris les consultations médicales, les médicaments génériques, et les examens médicaux de
								routine.<br/>
							</li>
							<li className="my-2"><span className="font-bold"></span>

								Avantages :<br/>
								Remboursement à 80% des frais médicaux.
								Accès à un réseau de médecins et de spécialistes partenaires.
								Service client dédié pour répondre aux questions et aux demandes de remboursement.
							</li>
							<Card
								isFooterBlurred
								radius="lg"
								className="border-none max-w-2xl mx-auto"
							>
								<Image
									alt="Woman listing to music"
									className="object-cover"
									src="Cobalt.png"
								/>
								<CardFooter
									className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
									<p className="text-tiny text-white text-center">Forfait Cobalt.</p>
									<Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
											radius="lg" size="sm">
										souscrire
									</Button>
								</CardFooter>
							</Card>

						</CardBody>
					</Card>
				</Tab>
				<Tab key="Lithium" title="Lithium👨🏻‍🦳">
					<Card>
						<CardBody>
							<div className="ml2">Forfait Lithium</div>


							<li className="my-2"><span className="font-bold"></span> Couverture : <br/>
								Spécialement conçu pour les adhérents plus âgés, ce forfait met l'accent
								sur la prévention et le bien-être, en plus de la couverture médicale de base. <br/>
							</li>
							<li className="my-2"><span className="font-bold"></span>

								Avantages :<br/>
								Remboursement à 85% des frais médicaux.
								Examens médicaux de prévention annuels gratuits, y compris les bilans de santé.
								Couverture des frais liés aux appareils auditifs et aux lunettes.
								Accès à des services de télémédecine pour la consultation à distance avec des médecins.
							</li>

							<Card
								isFooterBlurred
								radius="lg"
								className="border-none max-w-2xl mx-auto"
							>
								<Image
									alt="Woman listing to music"
									className="object-cover"
									src="Lithium.png"
								/>
								<CardFooter
									className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
									<p className="text-tiny text-white/80">Forfait Lithium.</p>
									<Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
											radius="lg" size="sm">
										souscrire
									</Button>
								</CardFooter>
							</Card>

						</CardBody>
					</Card>
				</Tab>
				<Tab key="Titanium" title="Titanium👨‍👩‍👦">
					<Card>
						<CardBody>
							<div className="ml2">Forfait Titanium</div>
							<li className="my-2"><span className="font-bold"></span> Couverture : <br/>
								Ce forfait est conçu pour les familles et offre une couverture étendue pour les soins de
								santé de toute la famille, y compris les soins pédiatriques, la maternité et les soins
								dentaires.
							</li>

							<li className="my-2"><span className="font-bold"></span>
								Avantages :<br/>
								Remboursement à 90% des frais médicaux pour les adultes et les enfants.
								Prise en charge des frais liés à la maternité, y compris les frais d'accouchement.
								Soins dentaires préventifs gratuits pour les enfants.
								Accès à des spécialistes en pédiatrie.
							</li>
							<Card
								isFooterBlurred
								radius="lg"
								className="border-none max-w-2xl mx-auto"
							>
								<Image
									alt="Woman listing to music"
									className="object-cover"
									src="Titanium.png"
								/>
								<CardFooter
									className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
									<p className="text-tiny text-white/80">Forfait Titanium.</p>
									<Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
											radius="lg" size="sm">
										souscrire
									</Button>
								</CardFooter>
							</Card>
						</CardBody>
					</Card>
				</Tab>
			</Tabs>

		</>
	);
}