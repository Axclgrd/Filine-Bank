export async function fetchAgences() {
    try {
        const response = await fetch('https://a5a57913-582f-4696-bad9-c0ebcd057990.filine-bank.tech/agences'); // Remplacez par l'URL de votre API.
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données d\'agence.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données d\'agence:', error);
        return [];
    }
}

export async function fetchGestionnairesByAgence(agenceId) {
    try {
        const response = await fetch(`https://a5a57913-582f-4696-bad9-c0ebcd057990.filine-bank.tech/agences/${agenceId}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des détails de l\'agence.');
        }
        const data = await response.json();

        // Vérifiez si la réponse contient une propriété 'gestionnaires'
        if (data.gestionnaires) {
            // Filtrer les gestionnaires en fonction de l'ID de l'agence
            const gestionnairesDeLAgence = data.gestionnaires.filter(gestionnaire => gestionnaire.agenceVille === data.ville);
            console.log('Gestionnaires récupérés :', gestionnairesDeLAgence);
            return gestionnairesDeLAgence;
        } else {
            console.log('Aucun gestionnaire trouvé.');
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des gestionnaires :', error);
        return [];
    }
}







