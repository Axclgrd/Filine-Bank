import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { useState, useEffect } from "react";
import { fetchUserData } from "../app/api"; // Assurez-vous d'importer la fonction depuis votre fichier api

export default function CompteEpargne() {
    const [userData, setUserData] = useState({ firstname: "", name: "" });

    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            if (data) {
                setUserData(data);
            }
        }
        fetchData();
    }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le montage.

    return (
        <>
            <div className="grid w-full text-left items-center">
                <h2>Comptes épargne :</h2>
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="px-2 text-left">
                                <p>
                                    <strong>Livret A</strong>
                                </p>
                                <p>
                                    M. {userData.firstname} {userData.name}
                                </p>
                            </div>
                            <div className="px-2 text-center">
                                <p className="text-green-600 font-bold">30 000€</p>
                                <Link>
                                    <Button size="sm" radius="full" color="primary">
                                        Consulter
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                {/* Continuez avec d'autres comptes épargne de la même manière */}
            </div>
        </>
    );
}
