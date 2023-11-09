export async function fetchUserData(userMail) {
    try {
        console.log("Fetching user data for user with mail:", userMail);
        const response = await fetch(`http://localhost:8080/users/mail/${userMail}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données utilisateur.');
        }
        const data = await response.json();
        console.log("User data fetched:", data);
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
}
