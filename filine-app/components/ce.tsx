import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { fetchUserData } from "../app/api";
import { useState, useEffect } from "react";

export default function CompteEpargne() {
    const [userData, setUserData] = useState({ firstname: "", name: "" });

    useEffect(() => {
        async function fetchData() {
            // Récupérez l'adresse e-mail de l'utilisateur connecté depuis localStorage
            const userMail = localStorage.getItem('userMail');
            if (userMail) {
                const data = await fetchUserData(userMail);
                if (data) {
                    setUserData(data);
                }
            }
        }
        fetchData();
    }, []);

    return (
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
    );
}
