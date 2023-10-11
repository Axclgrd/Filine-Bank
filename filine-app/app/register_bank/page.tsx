'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {subtitle, title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {CheckLogo, EyeFilled, EyeFilledSlashed} from "@/components/icons";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {RadioGroup, Radio} from "@nextui-org/radio";
import axios from "axios";

function CreateBankAccountPage() {
	const userId = localStorage.getItem('userId');
	console.log('UserID from localStorage:', userId);
	const [validationMessage, setValidationMessage] = useState<string | null>(null);
	const router = useRouter();




	const [formData, setFormData] = useState({
		userId: userId ? Number(userId) : null,
		type: '',
		model: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'type') {
			setFormData({ ...formData, type: value });
		} else if (name === 'model') {
			setFormData({ ...formData, model: value });
		}
	};


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Créez un objet contenant les données du compte bancaire et l'ID de l'utilisateur
		const bankAccountData = {
			userId: formData.userId,
			type: formData.type,
			model: formData.model,
		};

		// Utilisez Axios pour envoyer une requête POST à votre API pour créer le compte bancaire
		try {
			console.log('Données à envoyer à l\'API :', bankAccountData);
			const response = await axios.post('http://localhost:8080/newaccount', bankAccountData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) {
				// Redirigez l'utilisateur vers une page de confirmation ou ailleurs
				setValidationMessage('Compte créé avec succès');
				router.push(`/`);

			} else {
				// Gérez les erreurs de manière appropriée
				console.error('Erreur lors de la création du compte bancaire');
				setValidationMessage('Erreur lors de la création du compte bancaire');
			}
		} catch (error) {
			console.error('Erreur lors de la création du compte bancaire :', error);
		}
	};


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

					<p className="mb-2">Choisir un Livret/Assurance</p>

					<RadioGroup
						label=""
						orientation="horizontal"
						className="mb-5 items-center"
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<Radio value="LIVRETA">Livret A</Radio>
						<Radio value="LIVRET_JEUNE">Livret Jeune</Radio>
						<Radio value="LIVRET_PEL">Livret PEL</Radio>
						<Radio value="LIVRET_PEA">Livret PEA</Radio>
						<Radio value="VIE">Assurance VIE</Radio>
						<Radio value="DECES">Assurance DECES</Radio>
						<Radio value="MIXTE">Assurance MIXTE</Radio>

					</RadioGroup>

					<p className="mb-2">Choisir une Carte</p>

					<RadioGroup
						label=""
						orientation="horizontal"
						className="mb-5 items-center"
						value={formData.model}
						onChange={(e) => setFormData({ ...formData, model: e.target.value })}
					>
						<Radio value="MASTERCARD">Mastercard</Radio>
						<Radio value="VISA_CLASSIC">VISA Classic</Radio>
						<Radio value="VISA_PREMIERE">VISA PREMIERE</Radio>
						<Radio value="VISA_BLACK">VISA BLACK</Radio>
					</RadioGroup>
					<Button type="submit" color="primary">
						Créer le compte de Banque
					</Button>

					<p>{validationMessage}</p>


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

export default CreateBankAccountPage;
