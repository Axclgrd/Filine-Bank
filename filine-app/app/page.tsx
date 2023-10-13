"use client";
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {Carte, GithubIcon, Logo, Transaction, Transfert} from "@/components/icons";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import CompteCourant from "@/components/cc";
import CompteEpargne from "@/components/ce";
import AssuVie from "@/components/assuvie";
import React, {useState, useEffect} from 'react';
import {fetchUserData} from './api';
import axios from "axios";
import {useRouter} from 'next/navigation';
import AutoLogout from './AutoLogout';
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import {Image} from "@nextui-org/image";
import {color} from "framer-motion";
import {blue} from "color-name";


export default function Home() {
    const [userData, setUserData] = useState<{ firstname: string; name: string } | null>(null); // Spécifiez le type de userData
    const router = useRouter();
    const now = new Date();

    // Extracting day, month, hour, and minute
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}/${month} ${hour}:${minute}`;

    useEffect(() => {
        // Récupérez l'adresse e-mail stockée dans localStorage
        const userMail = localStorage.getItem('userMail'); // Vous devrez adapter cela en fonction de la façon dont vous stockez les informations d'identification.
        console.log('userMail:', userMail); // Ajoutez cette ligne pour vérifier la valeur de userMail

        // Vérifiez si l'utilisateur est connecté (c'est-à-dire, si vous avez l'adresse e-mail de l'utilisateur)
        if (userMail) {
            // Appelez fetchUserData avec l'adresse e-mail en tant que paramètre
            fetchUserData(userMail)
                .then((userData) => {
                    if (userData) {
                        console.log('Données de l\'utilisateur connecté', userData);
                        setUserData(userData);
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données de l\'utilisateur connecté', error);
                });
        } else {
            // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
            router.push('/login');
        }
    }, []);


    let tabs = [
        {
            id: "tous",
            label: "Tous",
            content: <><CompteCourant/>
                <div className="mt-5"></div>
                <CompteEpargne/></>,

        },
        {
            id: "epargne",
            label: "Epargne",
            content: <><CompteEpargne/></>
        },
        {
            id: "assu-vie",
            label: "Assurance vie",
            content: <><AssuVie/></>
        },
        {
            id: "mutuelle",
            label: "Mutuelle",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
    return (
        <section className="flex flex-col items-start gap-4">
            <div className="flex flex-col px-4 sm:px-6 lg:px-8 md:flex-row">
                <div className="inline-block max-w-lg">

                    {userData ? (
                        <>
                            <div className="flex min-w-full items-center justify-around">
                                <div className="flex">
                                    <Avatar src="/memoji_ag.png" classNames={{
                                        base: "bg-gradient-to-br from-[#8BA2FA] to-[#051A6A]"
                                    }}
                                            size="lg"/>
                                    <div className="ml-2 grid">
                                        <h1 className={'text-2xl'}><strong>Bonjour,</strong></h1>
                                        <p className={'text-xl'}>{userData.firstname} {userData.name}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Connectez-vous pour afficher les données de l&apos;utilisateur.</p>
                    )}

                </div>
            </div>
            <Card className="md:min-w-full" style={{width: '100%'}}>
                <img src="/fond.png" alt="Background"
                     className="absolute top-0 left-0 w-full h-full object-cover blur-md"/>


                <CardBody>
                    <div className="mt-5 text-center text-white">
                        <div className="p-32 ">
                            <p className="text-white text-xl">Compte-courant</p>
                            <h1 className={title()}>25 000</h1>
                            <p className="text-xs">Solde du {formattedDate}</p>
                        </div>
                        <div className="flex justify-around">
                            <Link className="grid" href="/virements">
                                <Button
                                    className="rounded-full bg-gradient-to-br from-blue-300 to-blue-900 text-white shadow-lg">
                                    <Transfert/>
                                </Button>
                                <p className="text-white">Virements</p>
                            </Link>
                            <Link className="grid" href="/carte">
                                <Button
                                    className="rounded-full bg-gradient-to-br from-blue-300 to-blue-800 text-white shadow-lg">
                                    <Carte/>
                                </Button>
                                <p className="text-white">Carte</p>
                            </Link>
                            <Link className="grid">
                                <Button
                                    className="rounded-full bg-gradient-to-br from-blue-300 to-blue-800 text-white shadow-lg">
                                    <Transaction />
                                </Button>
                                <p className="text-white">Transaction</p>
                            </Link>

                        </div>


                    </div>

                </CardBody>
            </Card>
            <div className="mt-3 w-full px-4 sm:px-6 lg:px-8">
                <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
                    {(item) => (
                        <Tab key={item.id} title={item.label}>
                            <Card>
                                <CardBody>
                                    {item.content}
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>

            </div>
            <AutoLogout/>
        </section>

    );
}
