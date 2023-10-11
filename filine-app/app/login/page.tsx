'use client'
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import axios from 'axios';
import { useState } from 'react';

export default function LoginPage() {
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');


	const handleLogin = async () => {
		console.log('données', mail, password);

		try {
			const response = await axios.post('http://localhost:8080/login', {
				mail,
				password,
			});

			console.log('Connexion réussie', response.data);

			// Stockez l'adresse e-mail dans localStorage après une connexion réussie
			localStorage.setItem('userMail', mail); // Assurez-vous que `mail` contient l'adresse e-mail

			// Effectuez la redirection après une connexion réussie en utilisant window.location.href
			window.location.href = '/';

		} catch (error) {
			console.error('Erreur de connexion', error);
			setError('L\'e-mail ou le mot de passe est incorrect.');
		}
	};




	return (
		<div>
			<h2>Connexion :</h2>
			<Input
				autoFocus
				label="Email"
				placeholder="Enter your email"
				variant="bordered"
				value={mail}
				onChange={(e) => setMail(e.target.value)}
			/>
			<Input
				label="Password"
				placeholder="Enter your password"
				type="password"
				variant="bordered"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div className="flex py-2 px-1 justify-between">
				<Link color="primary" href="#" size="sm">
					Forgot password?
				</Link>
			</div>
			<Button color="primary" onClick={handleLogin} className="w-full">
				Connexion
			</Button>
			<Link href="/register">
				<Button color="success" className="w-full">
					Ouvrir un compte
				</Button>
			</Link>
		</div>
	);
}
