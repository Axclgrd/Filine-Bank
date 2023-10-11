import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { mail, password } = req.body;

        // Récupère la liste des utilisateurs depuis ton API
        const usersResponse = await axios.get('http://localhost:8080/users');

        // Recherche l'utilisateur avec l'e-mail donné
        const user = usersResponse.data.find((user) => user.mail === mail);

        if (!user || user.password !== password) {
            // Identifiants incorrects, renvoyer une réponse 401 (Unauthorized)
            return res.status(401).json({ message: 'L\'e-mail ou le mot de passe est incorrect.' });
        }

        return res.status(200).json({ message: 'Connexion réussie !' });
    } else {
        return res.status(405).end();
    }
}

