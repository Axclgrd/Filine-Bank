'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AutoLogout() {
    const router = useRouter();


    // Durée d'inactivité avant la déconnexion (en millisecondes)
    const inactivityDuration = 60000; // 60 secondes

    // Créez un état pour stocker le minuteur
    const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);


    const [warningMessage, setWarningMessage] = useState('');

    // Fonction de déconnexion
    const logout = () => {
        // Effacez les données d'authentification
        localStorage.removeItem('userMail');
        localStorage.removeItem('userId')
        // Redirigez l'utilisateur vers la page de connexion
        router.push('/login');
    };

    // Démarrez le minuteur au chargement du composant
    useEffect(() => {
        // Démarrez le minuteur pour la déconnexion
        const timer = setTimeout(logout, inactivityDuration);
        setLogoutTimer(timer);

        // Nettoyez le minuteur lors du démontage du composant
        return () => {
            if (logoutTimer) {
                clearTimeout(logoutTimer);
            }
        };
    }, []);


    // Réinitialisez le minuteur lorsqu'un utilisateur effectue une action
    const handleUserActivity = () => {
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }

        // Démarrez un nouveau minuteur
        const newTimer = setTimeout(logout, inactivityDuration);
        setLogoutTimer(newTimer);
    };

    // Attachez un gestionnaire d'événements pour suivre l'activité de l'utilisateur
    useEffect(() => {
        // Écoutez des événements tels que les clics, les touches, etc.
        window.addEventListener('click', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);

        // Nettoyez les gestionnaires d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('click', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
        };
    }, []);


    return null;
}
