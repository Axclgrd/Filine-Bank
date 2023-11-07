"use client"
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import {useDisclosure} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
import CompteEpargne from "@/components/ce";
import CompteCourant from "@/components/cc";
import AssuVie from "@/components/assuvie";
import {Select, SelectItem, Avatar} from "@nextui-org/react";

export default function VirementPage() {
    const variants = [ "bordered"];
    const users = [
        {
            id: 1,
            name: "Axel Guillouard",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
            numero: "0742734655",
        },
        {
            id: 2,
            name: "Didine",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
            numero: "0636884667",
        },
        {
            id: 3,
            name: "Jane Fisher",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
            numero: "0636744643",
        },
        {
            id: 4,
            name: "Cyprien Bourre",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
            numero: "0736265664",
        },
        {
            id: 5,
            name: "Grand Maitre suprême",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
            numero: "0726665176",
        },

    ];
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
                                renderValue={(items) => {
                                    return items.map((item) => (
                                        <div key={item.key} className="flex items-center gap-2">
                                            <Avatar
                                                alt={item.data.name}
                                                className="flex-shrink-0"
                                                size="sm"
                                                src={item.data.avatar}
                                            />
                                            <div className="flex flex-col">
                                                <span>{item.data.name}</span>
                                                <span className="text-default-500 text-tiny">({item.data.numero})</span>
                                            </div>
                                        </div>
                                    ));
                                }}
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
                            <div className="w-full flex flex-col gap-4">
                                {variants.map((variant) => (
                                    <div key={variant} className="grid mb-6 md:mb-0 gap-4">
                                        <Input type="Nom" variant={"bordered"} label="Nom"/>
                                        <Input type="Prenom" variant={"bordered"} label="Prenom"  />
                                        <Input type="RIB" variant={"bordered"} label="RIB"  />

                                    </div>
                                ))}
                            </div>
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
