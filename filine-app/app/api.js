export async function fetchUserData() {
    try {
        console.log("Fetching user data...");
        const response = await fetch('http://localhost:8080/users/1'); // Utilisez l'URL absolue avec le protocole.
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données utilisateur.');
        }
        const data = await response.json();
        console.log("User data fetched:", data); // Affichez les données récupérées dans la console.
        return data; // Cela devrait être un objet contenant les données du nom et du prénom.
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
}

