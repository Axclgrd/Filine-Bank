"use client"
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {subtitle, title} from "@/components/primitives";
import {CheckLogo, EyeFilled, EyeFilledSlashed} from "@/components/icons";
import {Input} from "@nextui-org/input";
import React, { useState, useEffect } from 'react';
import { fetchAgences } from './api';
import { fetchGestionnairesByAgence } from './api';
import {RadioGroup, Radio} from "@nextui-org/radio";
import { Button } from "@nextui-org/button";
import axios from 'axios'


export default function AboutPage() {
	const [formData, setFormData] = useState({
		phone: "",
		firstname: "",
		name: "",
		mail: "",
		birth_date: "",
		address: "",
		agence_id: "",
		gestionnaire_id: "",
		mutuelle: "",
		password: "",
		// Ajoutez d'autres champs au besoin
	});

	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [value, setValue] = React.useState("junior2nextui.org");

	const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

	const isInvalid = React.useMemo(() => {
		if (value === "") return false;

		return validateEmail(value) ? false : true;
	}, [value]);

	const [agencesData, setAgences] = useState<{ id: number; ville: string }[]>([]); // État pour stocker les agences
	const [selectedAgence, setSelectedAgence] = useState(''); // État pour stocker l'agence sélectionnée
	const [gestionnaires, setGestionnaires] = useState<{ id: number; name: string; firstname: string }[]>([]);
	const [selectedGestionnaire, setSelectedGestionnaire] = useState<string>('');

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault(); // Empêche la soumission par défaut du formulaire

		// Convertissez la date en timestamp
		// const birthDateTimestamp = new Date(formData.birth_date).getTime();

		// Créez un nouvel objet de données au format requis par votre API

		const agenceIdStr = formData.agence_id; // Chaîne de caractères représentant l'ID de l'agence
		const gestionnaireIdStr = formData.gestionnaire_id; // Chaîne de caractères représentant l'ID du gestionnaire
		const birthDateTimestamp = Date.parse(formData.birth_date);

		const agence_id = BigInt(agenceIdStr);
		const gestionnaire_id = BigInt(gestionnaireIdStr);

		const apiFormData = {
			phone: formData.phone,
			firstname: formData.firstname,
			name: formData.name,
			mail: formData.mail,
			birth_date: birthDateTimestamp,
			address: formData.address,
			agence_id: agence_id.toString(),
			gestionnaire_id: gestionnaire_id.toString(),
			mutuelle: formData.mutuelle,
			password: formData.password
			// Ajoutez d'autres champs au besoin
		};
		console.log('Données du formulaire :', formData);
		console.log('Données à envoyer à l\'API :', apiFormData);




		try {
			console.log('Données à envoyer à l\'API :', apiFormData);

			// Envoyez les données à votre API en utilisant une requête POST
			const response = await axios.post('http://localhost:8080/newuser', apiFormData);


			console.log('Réponse de l\'API :', response);

			if (response.status === 200) {
				console.log('Données enregistrées avec succès !');
			} else {
				console.error('Erreur lors de l\'enregistrement des données.');
			}
		} catch (error) {
			console.error('Erreur lors de l\'envoi des données à l\'API :', error);
		}
	};






	useEffect(() => {
		fetchAgences()
			.then((data) => {
				setAgences(data);
			})
			.catch((error) => {
				console.error('Erreur lors de la récupération des agences :', error);
			});
	}, []);

	useEffect(() => {
		if (formData.agence_id) {
			fetchGestionnairesByAgence(formData.agence_id)
				.then((data) => {
					setGestionnaires(data);
				})
				.catch((error) => {
					console.error('Erreur lors de la récupération des gestionnaires :', error);
				});
		}
	}, [formData.agence_id]);


	useEffect(() => {
		console.log(formData);
	}, [formData]);



	return (
		<section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<div className="flex items-center justify-center">
					<h1 className={title( { color: "violet"} )}> Nos compte courants</h1>
				</div>

				<h2 className={subtitle()}> Pourquoi prendre un compte courant chez Filine ? </h2>
				<p className="my-4">
					Opter pour un compte courant chez Filine, choisir la modernité, la simplicité et la sécurité. Voici quelques raisons qui font de Filine un choix judicieux pour vos besoins bancaires :
				</p>
				<form onSubmit={handleSubmit} method="POST" action="http://localhost:8080/creer-compte">
					<Input
						type="phone"
						label="Téléphone"
						placeholder="Entrer votre numéro"
						value={formData.phone}
						onChange={(e) => {
							const inputValue = e.target.value;
							// Vérifier si l'entrée est un nombre et a une longueur de 10 chiffres ou si elle est vide
							if (/^[0-9]{0,10}$/.test(inputValue)) {
								setFormData({ ...formData, phone: inputValue });
							}
						}}
					/>
					<Input
						type="firstname"
						label="Prénom"
						placeholder="Saisir votre Prénom"
						value={formData.firstname}
						onChange={(e) => {
							const inputValue = e.target.value;
							// Supprimez les caractères spéciaux et les chiffres de l'entrée
							const formattedValue = inputValue.replace(/[^a-zA-Z]/g, '');

							// Vérifiez si l'entrée est vide ou ne contient que des espaces
							if (formattedValue.trim() === '') {
								setFormData({ ...formData, firstname: '' });
							} else {
								// Mettez en majuscule la première lettre
								const capitalizedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);

								setFormData({ ...formData, firstname: capitalizedValue });
							}
						}}
					/>

					<Input type="name"
						   label="Nom"
						   placeholder="Saisir votre Nom"
						   value={formData.name}
						   onChange={(e) => {
							   const inputValue = e.target.value;
							   // Supprimez les caractères spéciaux et les chiffres de l'entrée
							   const formattedValue = inputValue.replace(/[^a-zA-Z]/g, '');

							   // Vérifiez si l'entrée est vide ou ne contient que des espaces
							   if (formattedValue.trim() === '') {
								   setFormData({ ...formData, name: '' });
							   } else {
								   // Mettez en majuscule la première lettre
								   const capitalizedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);

								   setFormData({ ...formData, name: capitalizedValue });
							   }
						   }}
					/>
					<Input
						type="birth-date"
						label="Date de Naissance"
						placeholder="Saisir votre Date de Naissance (JJ/MM/AAAA)"
						value={formData.birth_date}
						onChange={(e) => {
							let inputValue = e.target.value;

							// Supprimez tous les caractères qui ne sont pas des chiffres ou des barres obliques
							inputValue = inputValue.replace(/[^0-9/]/g, '');

							// Si la chaîne a plus de 10 caractères, raccourcissez-la à 10 caractères
							if (inputValue.length > 10) {
								inputValue = inputValue.slice(0, 10);
							}

							// Formatez la valeur pour qu'elle corresponde au format JJ/MM/AAAA
							inputValue = inputValue
								.replace(/^(\d{2})\/?(\d{0,2})\/?(\d{0,4})/, (match, p1, p2, p3) => {
									// Reformatage en JJ/MM/AAAA avec des barres obliques
									return p1 + (p2 ? '/' + p2 : '') + (p3 ? '/' + p3.slice(0, 4) : '');
								});

							// Mettez à jour le champ de formulaire avec la valeur formatée
							setFormData({ ...formData, birth_date: inputValue });
						}}
					/>

					<Input
						type="address"
						label="Adresse"
						placeholder="Saisir votre Adresse"
						value={formData.address}
						onChange={(e) => setFormData({ ...formData, address: e.target.value })}
					/>
					<RadioGroup
						label="Choisir une Agence"
						value={formData.agence_id}
						onChange={(e) => setFormData({ ...formData, agence_id: e.target.value })}
					>
						{(agencesData as { id: number; ville: string }[]).map((agence) => (
							<Radio key={agence.id} value={String(agence.id)}>
								{agence.ville}
							</Radio>
						))}
					</RadioGroup>


					<RadioGroup
						label="Choisir un Gestionnaire"
						value={formData.gestionnaire_id}
						onChange={(e) => setFormData({ ...formData, gestionnaire_id: e.target.value })}
					>
						{gestionnaires.length > 0 &&
							gestionnaires.map((gestionnaire) => {
								console.log('Gestionnaire :', gestionnaire); // Ajoutez cette ligne pour vérifier les données du gestionnaire
								return (
									<Radio key={gestionnaire.id} value={String(gestionnaire.id)}>
										{gestionnaire.name} {gestionnaire.firstname}
									</Radio>
								);
							})}
					</RadioGroup>



					<RadioGroup
						label="Choisir une Mutuelle"
						value={formData.mutuelle}
						onChange={(e) => setFormData({ ...formData, mutuelle: String(e.target.value) })}
					>
						<Radio value="LITHIUM">Lithium</Radio>
						<Radio value="COBALT">Cobalt</Radio>
						<Radio value="TITANIUM">Titanium</Radio>
					</RadioGroup>
					<Input
						value={formData.mail}
						onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
						type="email"
						label="Email"
						variant="bordered"
						isInvalid={isInvalid}
						color={isInvalid ? "danger" : "success"}
						errorMessage={isInvalid && "Please enter a valid email"}
						onValueChange={setValue}
						className="max-w-xs"
					/>
					<Input
						value={formData.password}
						onChange={(e) => setFormData({ ...formData, password: e.target.value })}
						label="Password"
						variant="bordered"
						placeholder="Enter your password"
						endContent={
							<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
								{isVisible ? (
									<EyeFilledSlashed className="text-2xl text-default-400 pointer-events-none" />
								) : (
									<EyeFilled className="text-2xl text-default-400 pointer-events-none" />
								)}
							</button>
						}
						type={isVisible ? "text" : "password"}
						className="max-w-xs"
					/>
					<Button type="submit" color="primary">
						Créer le compte
					</Button>

				</form>
			</div>
			<div className="mt-8 text-center">
				<h2 className={title({ color: "violet"})}> Nos cartes : </h2>
				<div className="flex grid-cols-12 gap-8 mt-2">
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="text-tiny uppercase font-bold">MasterCard</p>
							<small className="text-left text-default-500">Carte Gratuite dés 5 utilisations par mois.</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								alt="Card background"
								className="object-cover rounded-xl"
								src="/carte_mastercard.png"

								width={400}
							/>
							<div className="grid items-center justify-left">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Paiement Gratuit a l&apos;international.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Sans conditions de revenus.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Carte en PVC Recyclé.</small>
								</div>
							</div>

						</CardBody>
					</Card>
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="text-tiny uppercase font-bold">Visa Classic</p>
							<small className="text-default-500">Dés 5€ par mois</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								alt="Card background"
								className="object-cover rounded-xl"
								src="/visa_classic.png"

								width={400}
							/>
							<div className="grid items-center justify-left mt-2">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Tout de la MASTERCARD.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurance Voyage.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Modulable selon vos besoins.</small>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex grid-cols-12 gap-8 mt-2">
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="text-tiny uppercase font-bold">Visa Premiére</p>
							<small className="text-default-500">Dés 10€ par mois</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								alt="Card background"
								className="object-cover rounded-xl"
								src="/visa_premiere.png"

								width={400}
							/>
							<div className="grid items-center justify-left">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Tout de la VISA CLASSIC.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Offre partenaire VISA.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurance voyages premium.</small>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className=" w-full py-4 col-span-12 sm:col-span-5">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="text-tiny uppercase font-bold">Visa Infinite</p>
							<small className="text-default-500">Dés 20€ par mois</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								alt="Card background"
								className="object-cover rounded-xl"
								src="/visa_infinite.png"

								width={400}
							/>
							<div className="grid items-center justify-left mt-1">
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;TOUT DE LA VISA PREMIERE.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;CCV Evolutif.</small>
								</div>
								<div className="flex">
									<CheckLogo/>
									<small className="font-bold text-left text-default-500">&nbsp;Assurances Panne/Casse High-Tech.</small>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	);
}
