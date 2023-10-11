"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import CompteCourant from "@/components/cc";
import CompteEpargne from "@/components/ce";
import AssuVie from "@/components/assuvie";
import { useState, useEffect } from 'react';
import { fetchUserData } from './api';
import axios from "axios";
import {redirect} from "next/navigation";


export default function Home() {
	const [userData, setUserData] = useState<{ firstname: string; name: string } | null>(null); // Spécifiez le type de userData

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
		}
	}, []);




	let tabs = [
		{
			id: "tous",
			label: "Tous",
			content: <><CompteCourant  /> <div className="mt-5"></div> <CompteEpargne /></>,

		},
		{
			id: "epargne",
			label: "Epargne",
			content: <><CompteEpargne /></>
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
			<div className="flex flex-col md:flex-row">
				<div className="inline-block max-w-lg text-left">

					{userData ? (
						<>
							<h1 className={title()}>Bonjour&nbsp; {userData.firstname} {userData.name} !</h1>
							{/* Affichez les autres données de l'utilisateur ici */}
						</>
					) : (
						//<h1 className={title()}>Bonjour&nbsp; Axel Guillouard !</h1>
						redirect('/login')
					)}

				</div>
			</div>

			<div className="mt-3 w-full">
				<Tabs aria-label="Affichage des différents comtpe" items={tabs} variant="underlined">
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
		</section>

	);
}
