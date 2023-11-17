"use client"
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import {useDisclosure} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import React, {ChangeEvent, useEffect, useState} from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
import CompteEpargne from "@/components/ce";
import CompteCourant from "@/components/cc";
import AssuVie from "@/components/assuvie";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {fetchUserData} from "@/app/api";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function VirementPage() {
    interface User {
        id: number;
        name: string;
        avatar: string;
        numero: string;
        iban: string;
        // ... autres propriétés si présentes
    }

// ...

    const handleSelectUser = (selectedUser: User) => {
        setIbanDestinataire(selectedUser.iban);
    };

    // Créez une fonction qui gère l'événement de changement de sélection
    const handleChangeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUserId = parseInt(event.target.value); // Récupère l'ID de l'utilisateur sélectionné
        const selectedUser = users.find((user) => user.id === selectedUserId); // Trouve l'utilisateur dans la liste basée sur l'ID sélectionné

        if (selectedUser) {
            handleSelectUser(selectedUser); // Appelle la fonction pour mettre à jour l'IBAN du destinataire
        }
    };

    const variants = ["bordered"];
    const users = [
        {
            id: 1,
            name: "Axel Guillouard",
            avatar: "https://app.filine-bank.tech/memoji_ag.png",
            numero: "0742734655",
            iban:"FR8485627296000000000000"
        },
        {
            id: 2,
            name: "Didine",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
            numero: "0636884667",
            iban:"FR5645654564"
        },
        {
            id: 3,
            name: "Cyprien Bourre",
            avatar: "https://app.filine-bank.tech/memoji_cb.png",
            numero: "0736265664",
            iban:"FR3498240542000000000000"
        },
        {
            id: 4,
            name: "Grand Maitre suprême",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
            numero: "0726665176",
            iban:"FR0860579875400000000000"
        },

    ];
    const [montant, setMontant] = useState(""); // État pour stocker la valeur saisie dans l'Input
    const [ibanExpediteur, setIbanExpediteur] = useState("");
    const [ibanDestinataire, setIbanDestinataire] = useState("");
    const [securePass, setSID] = useState("");
    const afficherModalVirementsCC = () => {
        onOpenchangeVirementsCC();
    }
    const handleIbanChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Autoriser la saisie dans le champ RIB
        setIbanDestinataire(e.target.value);
    }
    const handleSIDChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Autoriser la saisie dans le champ RIB
        setSID(e.target.value);
    }
    // Fonction pour confirmer le virement compte à compte
    const confirmerVirementCC = () => {
        // Ici, vous pouvez utiliser la valeur 'montant' pour effectuer votre opération de virement
        console.log("Montant saisi :", montant);
        // Autres actions pour confirmer le virement
    }
    const {isOpen: isOpenvirementsCC, onOpen: onOpenvirementsCC, onOpenChange: onOpenchangeVirementsCC} = useDisclosure();
        const {
            isOpen: isOpenVirementsEntreAmis,
            onOpen: onOpenVirementsEntreAmis,
            onOpenChange: onOpenChangevirementsEntreAmis
        } = useDisclosure();
        const {
            isOpen: isOpenVirementsExterne,
            onOpen: onOpenVirementsExterne,
            onOpenChange: onOpenChangevirementsExterne
        } = useDisclosure();


    const envoyerVirement = async () => {
        try {
            const data = {
                montant,
                ibanExpediteur,
                ibanDestinataire,
                securePass
            };
            console.log('Données à envoyer:', data); // Print des données avant l'envoi à l'API

            const response = await axios.post('http://localhost:8080/virements', data);

            if (response.status === 200)  {
                console.log('Virement effectué avec succès !');
                // Réinitialiser le champ de saisie ou effectuer d'autres actions après le succès de l'envoi
                setMontant("");
                setIbanDestinataire("");
            } else {
                console.error('Échec lors de l\'envoi du virement.');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }

    const [userData, setUserData] = useState<{
        // Add the account property here if it exists in your data structure.
        account?: { iban: string };
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

                        if (fetchedUserData.account && fetchedUserData.account.iban) {
                            setIbanExpediteur(fetchedUserData.account.iban);
                        }

                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données de lutilisateur connecté', error);
                });
        } else {
            router.push('/login');
        }
    }, []);



    return (
        <div className="container w-full md:w-full lg:px-20 px-4 sm:px-6">
            <h1 className={`${title()} text-center md:text-left`}>Virements</h1>
            <h1 className={`${subtitle()} text-left md:text-left mt-2`}>Je fais un virement de </h1>

            <div className="mt-5">
                <Input
                    type="number"
                    inputMode="decimal"
                    placeholder="0.00"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">€</span>
                        </div>
                    }
                    value={montant}
                    onChange={(e) => setMontant(e.target.value || "0")} // Valeur par défaut "0" si le champ est vide
                />
                <p className="text-sm text-default-600 mt-1">Instantaner pour les virements en dessous de 300€</p>
            </div>

            <div className="grid mt-5 gap-4 grid-cols-1">
                <Button
                    radius="full"
                    color="primary"
                    variant="shadow"
                    onClick={onOpenchangeVirementsCC}
                >
                    Virement compte à compte
                </Button>
                <Modal isOpen={isOpenvirementsCC} backdrop="blur" onOpenChange={onOpenchangeVirementsCC}>
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">Virements compte à compte</ModalHeader>
                        <ModalBody>
                            <p>Montant saisie : {montant || "0"} €</p>
                            <RadioGroup
                                label="Envoyer depuis le compte:"
                            >

                                <Radio value={"CompteEpargne"}><CompteEpargne></CompteEpargne></Radio>
                                <Radio value={"CompteCourant"}><CompteCourant></CompteCourant></Radio>
                            </RadioGroup>


                            <RadioGroup
                                label="Vers le compte"
                            >

                                <Radio value={"CompteEpargne"}><CompteEpargne></CompteEpargne></Radio>
                                <Radio value={"CompteCourant"}><CompteCourant></CompteCourant></Radio>
                                <Radio value={"AssuVie"}><AssuVie></AssuVie></Radio>
                            </RadioGroup>
                            <Input type="text" variant={"bordered"} label="Secure Pass" onChange={handleSIDChange} />
                            <Button
                                radius="full"
                                color="success"
                                onClick={envoyerVirement}
                            >
                                Confirmer le Virement
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Button
                    radius="full"
                    color="success"
                    variant="shadow"
                    onClick={onOpenChangevirementsEntreAmis}
                >
                    Virement entre amis
                </Button>
                <Modal isOpen={isOpenVirementsEntreAmis} backdrop="blur" onOpenChange={onOpenChangevirementsEntreAmis}>
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">virements à votre Amis</ModalHeader>
                        <ModalBody>
                            <p>Montant saisie : {montant || "0"} €</p>
                            <Select
                                items={users}
                                label="Envoyer à"
                                className="max-w-xs"
                                variant="bordered"

                                classNames={{
                                    label: "group-data-[filled=true]:-translate-y-5",
                                    trigger: "min-h-unit-16",
                                    listboxWrapper: "max-h-[400px]",
                                }}
                                listboxProps={{
                                    itemClasses: {
                                        base: [
                                            "rounded-md",
                                            "text-default-500",
                                            "transition-opacity",
                                            "data-[hover=true]:text-foreground",
                                            "data-[hover=true]:bg-default-100",
                                            "dark:data-[hover=true]:bg-default-50",
                                            "data-[selectable=true]:focus:bg-default-50",
                                            "data-[pressed=true]:opacity-70",
                                            "data-[focus-visible=true]:ring-default-500",
                                        ],
                                    },
                                }}
                                popoverProps={{
                                    classNames: {
                                        base: "before:bg-default-200",
                                        content: "p-0 border-small border-divider bg-background",
                                    },
                                }}

                                onChange={handleChangeSelection}
                            >
                                {(user) => (
                                    <SelectItem key={user.id} textValue={user.name}>
                                        <div className="flex gap-2 items-center">
                                            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                                            <div className="flex flex-col">
                                                <span className="text-small">{user.name}</span>
                                                <span className="text-tiny text-default-400">{user.numero}</span>
                                            </div>
                                        </div>
                                    </SelectItem>
                                )}
                            </Select>
                            <Input type="text" variant={"bordered"} label="Secure Pass" onChange={handleSIDChange} />
                            <Button
                                radius="full"
                                color="success"
                                onClick={envoyerVirement}
                            >
                                Confirmer le Virement
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Button
                    radius="full"
                    color="warning"
                    onClick={onOpenChangevirementsExterne}
                >
                    Virement externe
                </Button>
                <Modal isOpen={isOpenVirementsExterne} backdrop="blur" onOpenChange={onOpenChangevirementsExterne}>
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">Information du destinataire</ModalHeader>
                        <ModalBody>
                            <p>Montant saisie : {montant || "0"} €</p>
                            <div className="w-full flex flex-col gap-4">
                                {variants.map((variant) => (
                                    <div key={variant} className="grid mb-6 md:mb-0 gap-4">
                                        <Input type="text" variant={"bordered"} label="Nom"/>
                                        <Input type="text" variant={"bordered"} label="Prenom"  />
                                        <Input type="text" variant={"bordered"} label="RIB" onChange={handleIbanChange} />
                                        <Input type="text" variant={"bordered"} label="Secure Pass" onChange={handleSIDChange} />

                                    </div>
                                ))}
                            </div>
                            <Button
                                radius="full"
                                color="success"
                                onClick={envoyerVirement}
                            >
                                Confirmer le Virement
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>

            </div>

            <div className="mt-8">
                <h2 className={`${subtitle()} text-left md:text-left`}>Plus de services</h2>
                <Divider className="my-2" />
                <Card>
                    <CardBody>
                        <p>Virement international</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
