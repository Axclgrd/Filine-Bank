import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";



export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<h1 className={title()}>🏦 Banque &nbsp;</h1>
				<h1 className={title({ color: "blue" })}>Filine :&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Votre confiance numérique , <br /> notre engagement financier.c
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Une banque du groupe ATSBANCK
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					as={NextLink}
					href="/compte-courant"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Ouvrir un compte
				</Link>
			</div>
			<Image
				isBlurred
				height={240}
				src="https://blog.yourewelcome.com/wp-content/uploads/Grand-slide-Groupe-ados-adolescents-heureux.jpg"
				alt="NextUI Album Cover"
				style={{ width: '100vh', objectFit: 'cover' }}
			/>
			<div className="mt-8 text-center">
				<h2 className={title()}> Nos services : </h2>
				<div className="flex grid-cols-12 gap-8 mt-2">
					<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-black/60 uppercase font-bold">Nouveau</p>
							<h4 className="text-black font-medium text-2xl">Assurance vie</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="https://media.istockphoto.com/id/1199060622/fr/photo/concept-de-soins-familiaux-mains-avec-la-silhouette-de-papier-sur-la-table.jpg?s=612x612&w=0&k=20&c=1Q0CxaEU2jxkBGjXrqKduBrfEQsjFkkPTEf8JYgPQK8="
						/>
						<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
							<div>
								<p className="text-black text-tiny">Conseiller disponible pour vous aidez.</p>
							</div>
							<Button
								href="/assurance-vie"
								as={Link}
								color="primary"
								radius="full"
								variant="solid"
								size="sm"
							>
								Voir les offres
							</Button>
						</CardFooter>
					</Card>
					<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-white/60 uppercase font-bold"></p>
							<h4 className="text-white font-medium text-2xl">Compte courant 💳</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="https://psdstash.com/wp-content/uploads/2019/01/Credit-Card-Mockup.jpg"
						/>
						<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
							<div className="text-left">
								<p className="text-white text-tiny">Ouvrez votre compte courant</p>
								<p className="text-white text-tiny">A partir de 0€</p>
							</div>
							<Button
								href="/compte-courant"
								as={Link}
								color="primary"
								radius="full"
								variant="solid"
								size="sm"
							>
								Voir les offres
							</Button>
						</CardFooter>
					</Card>
				</div>
				<div className="flex grid-cols-12 gap-8 mt-8">
					<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-white/60 uppercase font-bold">Bientôt disponible</p>
							<h4 className="text-white font-medium text-2xl">Acheter et vendez vos crypto monnaie 💰</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="https://cryptoast.fr/wp-content/uploads/2018/11/comprendre-crypto-monnaies.jpg"
						/>
						<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
							<div>
								<p className="text-black text-tiny">Ouvrez votre compte courant</p>
								<p className="text-black text-tiny">A partir de 0€ *</p>
							</div>
							<Button
								href="/assurance-vie"
								as={Link}
								isDisabled
								color="primary"
								radius="full"
								variant="solid"
								size="sm"
							>
								Bientot disponible
							</Button>
						</CardFooter>
					</Card>
					<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-black/60 uppercase font-bold">Nouveau</p>
							<h4 className="text-black font-medium text-2xl">Mutuelle 🩺</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="https://www.ville-montmorency.fr/sites/montmorency/files/inline-images/difference-mutuelle-assurance_opt.jpg"
						/>
						<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
							<div>
								<p className="text-black text-tiny">Conseiller disponible pour vous aidez.</p>
							</div>
							<Button
								href="/mutuelle"
								as={Link}
								color="primary"
								radius="full"
								variant="solid"
								size="sm"
							>
								Voir les offres
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
			<div className="mt-8">
				<h2 className={title()}> Filine vous accompagne dans vos projets </h2>
				<div className="flex w-full flex-col">

				</div>
			</div>
		</section>
	);
}
