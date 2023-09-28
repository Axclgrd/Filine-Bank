'use client'
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {useDisclosure} from "@nextui-org/use-disclosure";
import {color} from "framer-motion";
import {LessWasr} from "@/components/icons";
import {LogoAcceuil} from "@/components/icons";


export default function Home() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
            <div className="inline-block max-w-2xl text-center justify-center">
                <div className="flex items-center justify-center">
                    <LogoAcceuil/>
                    <h1 className={title()}>Banque &nbsp; </h1>
                    <h1 className={title({color: "blue"})}>Filine :&nbsp;</h1>
                </div>
                <h1 className={title()}>
                    Votre confiance numérique , <br/> notre engagement financier.
                </h1>
                <h2 className={subtitle({class: "mt-4"})}>
                    Une banque du groupe ATSBANCK
                </h2>
            </div>

            <div className="flex gap-3">
                <Link
                    as={NextLink}
                    href="/compte-courant"
                    className={buttonStyles({color: "primary", radius: "full", variant: "shadow"})}
                >
                    Ouvrir un compte
                </Link>
            </div>
            <Image
                isBlurred
                height={240}
                src="https://celinedomecq.com/wp-content/uploads/2022/02/etre-heureux-en-couple.png"
                alt="NextUI Album Cover"
                style={{width: '100vh', objectFit: 'cover'}}
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
                        <CardFooter
                            className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
                        <CardFooter
                            className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
                        <CardFooter
                            className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
                        <CardFooter
                            className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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

                <Button color={"primary"} radius="full" variant="shadow" size="lg" onPress={onOpen}>Découvrir tout les
                    services</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Services Filine</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Découvrez les solutions d&apos;épargne et de financement proposées par Filine,
                                        conçues pour répondre à vos besoins financiers.
                                    </p>

                                    <h3>Épargne</h3>
                                    <ul>
                                        <li><strong>Livret A</strong> : Une épargne sûre avec un taux garanti,
                                            accessible à tout moment.
                                        </li>
                                        <li><strong>Livret Jeune</strong> : Un taux avantageux pour les moins de 25 ans,
                                            idéal pour commencer à épargner.
                                        </li>
                                        <li><strong>Livret PEL</strong> : Parfait pour préparer un projet immobilier à
                                            moyen terme.
                                        </li>
                                        <li><strong>Livret PEA</strong> : Pour ceux qui souhaitent investir en bourse
                                            tout en profitant d&apos;avantages fiscaux.
                                        </li>
                                    </ul>

                                    <h3>Prêts</h3>
                                    <ul>
                                        <li><strong>Prêt Consommation</strong> : Financez vos projets personnels, qu&apos;il
                                            s&apos;agisse d&apos;un voyage, d&apos;une nouvelle voiture ou d&apos;un événement spécial.
                                        </li>
                                        <li><strong>Prêt Immobilier</strong> : Réalisez votre rêve de propriété avec des
                                            taux compétitifs et des conditions flexibles.
                                        </li>
                                    </ul>

                                    <p>
                                        Avec <strong>Filine</strong>, gérer vos finances n&apos;a jamais été aussi simple et
                                        efficace. Explorez nos offres et trouvez celle qui vous convient le mieux.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Fermer
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Ouvrir un compte
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

            </div>
            <div className="text-center mt-8">
                <h2 className={title()}> Engagement </h2>
                <h2 className={title({color: "green"})}>environnemental </h2>
                <div className="flex items-center justify-center">
                    <h2 className={title()}>de Filine&nbsp;</h2>
                    <LessWasr />
                </div>
                <div className="text-left mt-8 p-5 rounded-lg shadow-large">
                    <p className="text-lg leading-relaxed mb-4">
                        Chez <span className="text-green-600 font-bold">Filine</span>, nous sommes conscients de l&apos;impact des activités humaines sur notre planète. C&apos;est pourquoi nous avons intégré la durabilité et la responsabilité environnementale au cœur de notre stratégie d&apos;entreprise.
                    </p>

                    <h3 className="text-xl text-green-500 font-semibold mb-3">Initiatives Vertes</h3>
                    <ul className="list-disc list-inside pl-5 mb-4">
                        <li className="my-2"><span className="font-bold">Banque Numérique</span>: En étant une banque 100% en ligne, nous réduisons considérablement notre empreinte carbone en minimisant l&apos;utilisation de papier et en évitant les déplacements physiques inutiles.</li>
                        <li className="my-2"><span className="font-bold">Mutuelle Cobalt Écolo</span>: Une offre d&apos;assurance respectueuse de l&apos;environnement, reflétant notre engagement à soutenir des pratiques durables.</li>
                        <li className="my-2"><span className="font-bold">Financements Verts</span>: Nous privilégions les investissements dans des projets éco-responsables, contribuant ainsi à une économie plus verte et durable.</li>
                        <li className="my-2"><span className="font-bold">Éducation Financière</span>: Nous proposons régulièrement des ateliers et des ressources pour sensibiliser nos clients à l&apos;importance de la finance verte et des investissements durables.</li>
                    </ul>

                    <h3 className="text-xl text-green-500 font-semibold mb-3">Partenariats Écologiques</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Filine s&apos;associe avec des organisations environnementales de premier plan pour soutenir des projets de reforestation, de conservation de la biodiversité et de promotion des énergies renouvelables. Ensemble, nous œuvrons pour un avenir plus vert et plus propre.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Notre engagement envers la planète est indéfectible. En choisissant <span className="text-green-600 font-bold">Filine</span>, vous optez pour une banque qui ne se contente pas seulement de parler d&apos;écologie, mais qui agit concrètement pour un monde meilleur.
                    </p>
                </div>

            </div>
        </section>
    );
}
