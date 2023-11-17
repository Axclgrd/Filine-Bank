export async function getTransactions(accountId) {
    try {
        console.log("Fetching transactions data...");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_FILINE}/transactions/${accountId}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données de transaction.');
        }
        const data = await response.json();

        // Modifier la structure des données si nécessaire
        const modifiedData = data.map(transaction => ({
            amount: transaction.montant,  // Assurez-vous que la clé correspond à ce que vous attendez
            createdAt: transaction.ibanDestinataire,
            senderAccount: transaction.ibanExpediteur,
            // Ajoutez d'autres propriétés si nécessaire
        }));

        console.log("Transaction data fetched:", modifiedData);
        return modifiedData;
    } catch (error) {
        console.error("Error fetching transaction data:", error);
        return [];
    }
}
