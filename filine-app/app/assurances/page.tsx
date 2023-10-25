"use client"
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Switch} from "@nextui-org/switch";
import {AddtoWallet, Arrow, Mastercard, Visa} from "@/components/icons";
import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {useDisclosure} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";

export default function CartePage() {

    return (
        <div className="container text-left mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className={title()}>Assurances</h1>
            <h2 className={subtitle()}>Vos assurances Filine Banque</h2>
            <Divider/>
            <div className="grid md:flex md:justify-between">
                <div className="md:mr-7 md:w-1/2">

                    <Image
                        src="/assurance1.png"
                        alt="image assurance"
                        radius="lg"
                        loading="eager"
                        className={"mt-5 w-96 h-50"}
                    />
                    <Divider className="mt-6"/>

                    <h2 className={`${subtitle()} text-current font-semibold`}>Assurance habitation</h2>

                    <Card>
                        <CardBody>
                            <div>
                                <h1>L&apos;assurance habitation bientôt disponible</h1>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-current font-bold text-3xl">Filine Assurance </h2>
                    <p>Prochaine sur votre espace client <strong>Filine</strong> vous pourrez accéder à différent services
                    d&apos;assurance proposer par sa maison mère <strong>ATS BANK</strong></p>

                    <p>Différent type d&apos;assurance seron disponible comme <strong>l&apos;assurance habitation</strong> dès l&apos;années prochaine.</p>
                    <p>Nous sommes heureux de pouvoir proposer ces services a nos clients qui nous font chaque jour plus confiance.</p>
                </div>
            </div>
        </div>
    )
        ;
}
