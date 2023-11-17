"use client";
import {subtitle, title} from "@/components/primitives";
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {getTransactions} from './api';
import {useRouter} from "next/navigation";
import {fetchUserData} from "@/app/api";

const columns = [
    {
        key: "senderAccount",
        label: "ENSEIGNE",
    },
    {
        key: "createdAt",
        label: "DATE",
    },
    {
        key: "amount",
        label: "MONTANT",
    },
];


export default function TransactionPage() {
    const [userData, setUserData] = useState<{
        // Add the account property here if it exists in your data structure.
        account?: { id: string };
    } | null>(null);

    const [transactions, setTransactions] = useState<any[]>([]); // Déclarer l'état des transactions
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            // Récupérez l'adresse e-mail stockée dans localStorage
            const userMail = typeof window !== 'undefined' ? localStorage.getItem('userMail') : null;

            if (userMail) {
                try {
                    const fetchedUserData = await fetchUserData(userMail);
                    if (fetchedUserData && fetchedUserData.account && fetchedUserData.account.id) {
                        setUserData(fetchedUserData);
                        const accountId = fetchedUserData.account.id;

                        const transactionsData = await getTransactions(accountId);
                        setTransactions(transactionsData); // Mettre à jour l'état des transactions
                        console.log("Transactions:", transactionsData);
                    } else {
                        console.error("L'ID de l'account user n'est pas disponible dans les données utilisateur.");
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération des données de l\'utilisateur connecté', error);
                }
            } else {
                router.push('/login');
            }
        };

        // Appelez la fonction asynchrone
        fetchData();
    }, []);

    return (
        <div className="container w-full md:w-full lg:px-20 px-4 sm:px-6">
            <h1>Transactions</h1>
            {transactions.length > 0 ? (
                <Table aria-label="Tableau des transactions">
                    <TableHeader>
                        {columns.map((column) => (
                            <TableColumn key={column.key}>{column.label}</TableColumn>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {transactions.map((item, index) => (
                            <TableRow key={index}>
                                {columns.map((column) => (
                                    <TableCell key={column.key}>
                                        {column.key === 'amount' ? `${item[column.key]} €` : item[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p>Aucune transaction disponible.</p>
            )}
        </div>
    );
}
