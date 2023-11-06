"use client"
import {subtitle, title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Divider} from "@nextui-org/divider";
import {Card, CardBody} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {ThemeSwitch} from "@/components/theme-switch";
import React, {useEffect, useState} from "react";
import {Arrow} from "@/components/icons";
import {Link} from "@nextui-org/link";
import {useRouter} from "next/navigation";
import {fetchUserData} from "@/app/api";
import {useDisclosure} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import Mutuelle from "@/components/Mutuelle";
import {Slider} from "@nextui-org/react";

export default function VirementPage() {
    const [userData, setUserData] = useState<{ firstname: string; name: string, agence: "", mutuelle: "" } | null>(null)
    const router = useRouter();

    const {
        isOpen: isOpenMutuelle,
        onOpen: onOpenMutuelle,
        onOpenChange: onOpenChangeMutuelle
    } = useDisclosure();
    const {
        isOpen: isOpenContact,
        onOpen: onOpenContact,
        onOpenChange: onOpenChangeContact
    } = useDisclosure();

    const {
        isOpen: isOpenCredit,
        onOpen: onOpenCredit,
        onOpenChange: onOpenChangeCredit
    } = useDisclosure();

    useEffect(() => {
        // Récupérez l'adresse e-mail stockée dans localStorage
        const userMail = localStorage.getItem('userMail');
        //console.log('userMail:', userMail);

        if (userMail) {
            fetchUserData(userMail)
                .then((userData) => {
                    if (userData) {
                        setUserData(userData);
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données de l\'utilisateur connecté', error);
                });
        } else {
            router.push('/login');
        }
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className={`${title()} text-left md:text-left`}>Plus</h1>
            <div className="mt-2 flex justify-center items-center">
                <Card className="w-[350px]">
                    <CardBody>
                        <div className="flex place-content-around">
                            <Avatar isBordered color="warning" classNames={{
                                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]"
                            }}
                                    src={userData?.name === 'Guillouard' ? '/memoji_ag.png' : userData?.name === 'Bourre' ? '/memoji_cb.png' : undefined}
                                    size="lg"/>
                            <div className="mx-5 grid">
                                <h2 className="text-lg font-semibold">{userData?.firstname} {userData?.name}</h2>
                                <p className="text-xs">Profile et données personnel</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <Divider className="mt-3"/>
            <Link
                className="flex justify-between mt-2 mb-2 text-current"
                onPress={onOpenMutuelle}
            >
                <p className="text-left font-semibold">Mutuelle</p>
                <Arrow></Arrow>
            </Link>
            <Modal isOpen={isOpenMutuelle} backdrop="blur" onOpenChange={onOpenChangeMutuelle}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Votre mutuelle</ModalHeader>
                    <ModalBody>
                        <Card className="mb-4">
                            <CardBody className="text-center">
                                Votre mutuelle actuelle :
                                <Mutuelle/>
                            </CardBody>
                        </Card>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Divider className="mt-0"/>

            <Link

                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Souscrire</p>
                <Arrow></Arrow>
            </Link>



            <Divider className="mt-0"/>

            <Link
                onClick={onOpenContact}
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Contactez mon agence</p>
                <Arrow></Arrow>
            </Link>
            <Modal isOpen={isOpenContact} backdrop="blur" onOpenChange={onOpenChangeContact}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Contactez votre agence</ModalHeader>
                    <ModalBody>
                        <Card className="mb-4">
                            <CardBody className="text-left">

                                    <p>Agance de <span className="font-bold">Paris</span></p>
                                <p>Numéro de contact : <span className="font-bold">01 23 45 67 89</span></p>
                                    <p>Adresse : 1 rue de la paix, 75000 Paris</p>

                            </CardBody>
                        </Card>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Divider className="mt-0"/>

            <Link
                onClick={onOpenCredit}
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Demande de crédit conso</p>
                <Arrow></Arrow>
            </Link>

            <Modal isOpen={isOpenCredit} backdrop="blur" onOpenChange={onOpenChangeCredit}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Consulter les taux</ModalHeader>
                    <ModalBody>
                        <Card className="mb-4">
                            <CardBody className="text-center">
                                <Slider
                                    label="Montant a emprunter"
                                    step={0.01}
                                    maxValue={50000}
                                    minValue={500}
                                    defaultValue={10000}
                                    showOutline={true}
                                    color="foreground"
                                    className="max-w-md"
                                    size="sm"
                                />
                                <br/>
                                <Slider
                                    label="Mensualité"
                                    color="foreground"
                                    size="sm"
                                    step={12}
                                    marks={[
                                        {
                                            value: 24,
                                            label: "24 mois",
                                        },
                                        {
                                            value: 48,
                                            label: "48 mois",
                                        },
                                        {
                                            value: 72,
                                            label: "72 mois",
                                        },
                                    ]}
                                    defaultValue={24}
                                    className="max-w-md"
                                />
                                <br/>
                                <p className={"text-left"}>Pour plus d&apos;information ou confirmer votre emprunt, contacter votre agence.</p>
                            </CardBody>
                        </Card>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Divider className="mt-0"/>

            <div className="flex justify-between mt-2 mb-2 text-current">
                <p>Changer le thème de l&apos;apps</p>
                <ThemeSwitch/>
            </div>

        </div>
    );
}
