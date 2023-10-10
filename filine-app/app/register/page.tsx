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
		birth_date: 0,
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

		const agence_id = BigInt(agenceIdStr);
		const gestionnaire_id = BigInt(gestionnaireIdStr);

		const apiFormData = {
			phone: formData.phone,
			firstname: formData.firstname,
			name: formData.name,
			mail: formData.mail,
			birth_date: formData.birth_date,
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

			<div className="inline-block text-center justify-center">

				<div className="flex items-center justify-center">
					<h1 className={title( { color: "blue"} )}> Ouvrir un compte</h1>
				</div>

				<h2 className={subtitle()}> Notre priorité votre satisfaction </h2>
				<form onSubmit={handleSubmit} method="POST" action="http://localhost:8080/creer-compte">
					<Input
						type="firstname"
						label="Prénom"
						placeholder="Saisir votre Prénom"
						variant="bordered"
						className="mb-4"
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
						   variant="bordered"
						   className="mb-4"
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
						type="phone"
						label="Numéro de portable"
						placeholder="Entrer votre numéro"
						variant="bordered"
						className="mb-4"
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
						type="birth-date"
						label="Date de Naissance"
						placeholder="Saisir votre Date de Naissance"
						variant="bordered"
						className="mb-4"
						value={formData.birth_date.toString()} // Assurez-vous que la valeur est convertie en chaîne
						onChange={(e) => {
							const inputValue = parseInt(e.target.value); // Convertir la chaîne en nombre
							setFormData({ ...formData, birth_date: inputValue });
						}}
					/>
					<Input
						type="address"
						label="Adresse"
						placeholder="Saisir votre Adresse"
						variant="bordered"
						className="mb-4"
						value={formData.address}
						onChange={(e) => setFormData({ ...formData, address: e.target.value })}
					/>

					<p className="mb-2">Choisir une Agence</p>

					<RadioGroup
						value={formData.agence_id}
						className="mb-2 items-center"
						orientation="horizontal"
						onChange={(e) => setFormData({ ...formData, agence_id: e.target.value })}
					>
						{(agencesData as { id: number; ville: string }[]).map((agence) => (
							<Radio key={agence.id} value={String(agence.id)}>
								{agence.ville}
							</Radio>
						))}
					</RadioGroup>


					<p className="mb-2">Choisir un Gestionnaire</p>

					<RadioGroup
						value={formData.gestionnaire_id}
						orientation="horizontal"
						className="mb-2 items-center"
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

					<p className="mb-2">Choisir une Mutuelle</p>

					<RadioGroup
						label=""
						orientation="horizontal"
						className="mb-5 items-center"
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
						className="mb-5 items-center"
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
						className="mb-5 items-center"
					/>
					<Button type="submit" color="primary">
						Créer le compte
					</Button>

				</form>
			</div>
	);
}
