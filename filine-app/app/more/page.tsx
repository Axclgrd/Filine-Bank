"use client"
import {subtitle, title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Divider} from "@nextui-org/divider";
import {Card, CardBody} from "@nextui-org/card";
import {Avatar} from "@nextui-org/react";
import {ThemeSwitch} from "@/components/theme-switch";
import React, {useEffect, useState} from "react";
import {Arrow} from "@/components/icons";
import {Link} from "@nextui-org/link";
import {useRouter} from "next/navigation";
import {fetchUserData} from "@/app/api";

export default function VirementPage() {
    const [userData, setUserData] = useState<{ firstname: string; name: string } | null>(null)
    const router = useRouter();


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
                                src={userData?.name === 'Guillouard' ? '/memoji_ag.png' : userData?.name === 'Bourre' ? '/memoji_cb.png': undefined}
                                name={userData?.name !== 'Guillouard' ? userData?.firstname[0] + userData?.name[0] : undefined}
                                size="lg" />
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
                href="/mutuelle"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Mutuelle</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/mutuelle"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Souscrire</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/contact"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Contactez mon agence</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/credit"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Demande de crédit conso</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <div className="flex justify-between mt-2 mb-2 text-current">
                <p>Changer le thème de l'apps</p>
                <ThemeSwitch/>
            </div>

        </div>
    );
}
