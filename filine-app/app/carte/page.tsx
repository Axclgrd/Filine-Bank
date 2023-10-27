"use client"
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Switch} from "@nextui-org/switch";
import {AddtoWallet, Arrow, Mastercard, Visa} from "@/components/icons";
import React, {useEffect, useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {useDisclosure} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";
import {useRouter} from "next/navigation";
import {fetchUserData} from "@/app/api";

export default function CartePage() {
    const {isOpen: isOpenCode, onOpen: onOpenCode, onOpenChange: onOpenChangeCode} = useDisclosure();
    const {
        isOpen: isOpenCaracteristique,
        onOpen: onOpenCaracteristique,
        onOpenChange: onOpenChangeCaracteristique
    } = useDisclosure();
    const {
        isOpen: isOpenAssuAssis,
        onOpen: onOpenAssuAssis,
        onOpenChange: onOpenChangeAssuAssis
    } = useDisclosure();
    const [isBlurred, setIsBlurred] = useState(true);

    const [userData, setUserData] = useState<{
        firstname: string;
        name: string;
        // Add the account property here if it exists in your data structure.
        account?: { model: string };
    } | null>(null);

    const router = useRouter();

    useEffect(() => {
        // Récupérez l'adresse e-mail stockée dans localStorage
        const userMail = localStorage.getItem('userMail');
        //console.log('userMail:', userMail);


        if (userMail) {
            fetchUserData(userMail)
                .then((fetchedUserData) => {
                    if (fetchedUserData) {
                        setUserData(fetchedUserData);

                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données de lutilisateur connecté', error);
                });
        } else {
            router.push('/login');
        }
    }, []);

    let cardName;
    let cardImage;
    let cardLink;
    switch (userData?.account?.model) {
        case "MASTERCARD":
            cardName = "Mastercard";
            cardImage = "/carte_mastercard.png";
            cardLink = (
                <Link isExternal href="https://www.mastercard.ch/fr-ch/mastercard-pour-vous/trouver-une-carte/mastercard-standard.html" className="mt-2 mb-2 flex justify-between text-current">
                    <div className="inline-flex items-center">
                        <Mastercard />
                        <p>&nbsp;Découvrir les offres Mastercard</p>
                    </div>
                    <Arrow />
                </Link>
            );
            break;
        case "VISA_CLASSIC":
            cardName = "Visa Classic";
            cardImage = "/visa_classic.png";
            cardLink = (
                <Link isExternal href="https://www.visa.fr/payer-avec-visa/ma-carte-visa/visa-classic.html" className="mt-2 mb-2 flex justify-between text-current">
                    <div className="inline-flex items-center">
                        <Visa />
                        <p>&nbsp;Découvrir les offres Visa Classic</p>
                    </div>
                    <Arrow />
                </Link>
            );
            break;
        case "VISA_PREMIERE":
            cardName = "Visa Premiere";
            cardImage = "/visa_premiere.png";
            cardLink = (
                <Link isExternal href="https://www.visa.fr/payer-avec-visa/ma-carte-visa/visa-premier.html" className="mt-2 mb-2 flex justify-between text-current">
                    <div className="inline-flex items-center">
                        <Visa />
                        <p>&nbsp;Découvrir les offres Visa Première</p>
                    </div>
                    <Arrow />
                </Link>
            );
            break;
        case "VISA_BLACK":
            cardName = "Visa Infinite";
            cardImage = "/visa_infinite.png";
            cardLink = (
                <Link isExternal href="https://www.visa.fr/payer-avec-visa/ma-carte-visa/visa-infinite.html" className="mt-2 mb-2 flex justify-between text-current">
                    <div className="inline-flex items-center">
                        <Visa />
                        <p>&nbsp;Découvrir les offres Visa Black</p>
                    </div>
                    <Arrow />
                </Link>
            );
            break;
    }

    return (
        <div className="container text-left mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className={title()}>Carte</h1>
            <h2 className={subtitle()}>{cardName}</h2>
            <Divider />
            <div className="grid md:flex md:justify-between">
                <div className="md:mr-7 md:w-1/2">
                    <Image
                        isBlurred
                        src={cardImage}
                        alt="NextUI Album Cover"
                        className={"mt-5 w-96 h-50"}
                    />
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <p>Verrouillage temporaire</p>
                            <Switch aria-label="Verrouillage temporaire" />
                        </div>
                        <Divider className="mt-3" />
                        <Link onPress={onOpenCode} className="mt-2 mb-2 flex justify-between text-current">
                            <p>Voir le code de ma carte</p>
                            <Arrow />
                        </Link>
                        <Modal isOpen={isOpenCode} backdrop="blur" onOpenChange={onOpenChangeCode}>
                            <ModalContent>
                                <ModalHeader className="flex flex-col gap-1">Code confidentiel</ModalHeader>
                                <ModalBody>
                                    <Card className="mb-4">
                                        <CardBody className="text-center">
                                            <h1 className={`${title()} ${isBlurred ? 'blur-md' : ''}`}>2649</h1>
                                        </CardBody>
                                    </Card>
                                    <Button onClick={() => setIsBlurred(!isBlurred)}>Afficher le code</Button>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                        <Divider className="mt-3" />
                        <div className="mt-2 mb-2 flex justify-between">
                            <p>Mode voyage</p>
                            <Switch aria-label="Mode voyage" />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="mt-4 text text-2xl text-left"><strong>Réglages</strong></h2>

                    <div className="mt-2 mb-2 flex justify-between">
                        <div className="grid text-left">
                            <p>Paiement à distance</p>
                            <p className="text-xs">internet, téléphone, abonnement</p>
                        </div>
                        <Switch aria-label="Paiement à distance" defaultSelected />
                    </div>
                    <Divider className="mt-3" />
                    <div className="mt-2 mb-2 flex justify-between">
                        <p>Paiement et retrait à l&apos;étranger</p>
                        <Switch aria-label="Paiement et retrait à l&apos;étranger" defaultSelected />
                    </div>
                    <h2 className="mt-4 text text-2xl text-left"><strong>Services</strong></h2>
                    {cardLink}
                    <Link onPress={onOpenCaracteristique} className="mt-2 mb-2 flex justify-between text-current">
                        <p>Caractéristiques de ma carte</p>
                        <Arrow />
                    </Link>
                    <Modal isOpen={isOpenCaracteristique} backdrop="blur" onOpenChange={onOpenChangeCaracteristique}>
                        <ModalContent>
                            <ModalHeader className="flex flex-col gap-1">Caractéristiques de ma carte</ModalHeader>
                            <ModalBody>
                                <ul className="list-decimal pl-5 text-current mb-6">
                                    <li>Limite de crédit élevée pour des achats et des retraits flexibles.</li>
                                    <li>Technologie de paiement sans contact pour des transactions rapides et sécurisées.</li>
                                    <li>Service de conciergerie disponible 24/7.</li>
                                    <li>Avantages exclusifs dans les hôtels de luxe, boutiques de prestige et restaurants gastronomiques.</li>
                                    <li>Offres spéciales et promotions chez des partenaires sélectionnés.</li>
                                    <li>Accès gratuit aux salons d&apos;aéroports VIP à travers le monde.</li>
                                </ul>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    <Divider className="mt-0" />
                    <Link onPress={onOpenAssuAssis} className="mt-2 mb-2 flex justify-between text-current">
                        <p>Assurance et Assistance</p>
                        <Arrow />
                    </Link>
                    <Modal isOpen={isOpenAssuAssis} backdrop="blur" onOpenChange={onOpenChangeAssuAssis}>
                        <ModalContent>
                            <ModalHeader className="flex flex-col gap-1">Assurance et Assistance de votre carte</ModalHeader>
                            <ModalBody>
                                <ul className="list-decimal pl-5 text-current">
                                    <li>Assurance médicale internationale pour des séjours jusqu&apos;à 90 jours.</li>
                                    <li>Assistance rapatriement en cas d&apos;accident ou de maladie à l&apos;étranger.</li>
                                    <li>Couverture contre l&apos;annulation, le retard ou la perte de bagages pendant les voyages.</li>
                                    <li>Protection anti-fraude avancée avec un service de remplacement d&apos;urgence de la carte.</li>
                                    <li>Assurance en cas de vol ou de dommages sur les locations de voiture.</li>
                                    <li>Couverture pour les accidents de voyage, y compris décès et invalidité.</li>
                                </ul>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    <Divider className="mt-0" />
                </div>
            </div>
        </div>
    );
}
