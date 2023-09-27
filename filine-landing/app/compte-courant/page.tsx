import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";

export default function AboutPage() {
    return (
	<div className="min-w-full">
		<h1 className={title( { color: "violet"} )}> Nos compte courants </h1>

		<h2 className={subtitle()}> Pourquoi prendre un compte courant chez Filine ? </h2>

		<div className="w-4/5 mx-auto text-lg leading-relaxed text-left">
			<p className="my-4">
				Opter pour un compte courant chez Filine, c'est choisir la modernité, la simplicité et la sécurité. Voici quelques raisons qui font de Filine un choix judicieux pour vos besoins bancaires :
			</p>
			<ul className="list-disc list-inside pl-5 my-4 ">
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>100% en ligne :</span> Avec Filine, dites adieu aux déplacements en agence et à l'attente interminable. Toutes vos opérations peuvent être effectuées en ligne, à tout moment et où que vous soyez.</li>
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>Sécurité renforcée :</span> Filine met un point d'honneur à assurer la sécurité de vos transactions et de vos données. Notre plateforme utilise les technologies de sécurité les plus avancées pour vous garantir une expérience bancaire sereine.</li>
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>Économies garanties :</span> Contrairement aux banques traditionnelles qui peuvent avoir de nombreux frais cachés, Filine se veut transparent et abordable. Nos coûts réduits en tant que banque en ligne se traduisent par des économies pour nos clients.</li>
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>Compte d'épargne en quelques clics :</span> Vous souhaitez mettre de l'argent de côté ? Avec Filine, ouvrir un compte d'épargne est un jeu d'enfant. En quelques clics, vous pouvez commencer à économiser pour vos projets futurs.</li>
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>Intégrez votre assurance vie :</span> En plus des services bancaires standards, Filine vous offre la possibilité d'intégrer votre assurance vie Filine directement à votre compte, simplifiant ainsi la gestion de vos finances.</li>
				<li className="my-2"><span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]`}>Bientôt, les crypto-monnaies :</span> Toujours à la pointe de l'innovation, Filine envisage prochainement d'introduire la possibilité d'acheter des crypto-monnaies directement depuis votre compte. Une façon pour nos clients de diversifier leurs investissements et de rester à la pointe de la technologie financière.</li>
			</ul>
			<p>En somme, choisir Filine, c'est opter pour une banque qui comprend les besoins du 21ème siècle, tout en mettant l'accent sur la simplicité, la sécurité et l'innovation. Rejoignez-nous et découvrez une nouvelle façon de gérer votre argent.</p>
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
