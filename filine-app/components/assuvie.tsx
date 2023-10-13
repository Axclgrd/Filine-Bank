import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { useState, useEffect } from "react";
import { fetchUserData } from "../app/api"; // Assurez-vous d'importer la fonction depuis votre fichier api

export default function AssuVie() {
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
        <>
            <div className="grid w-full text-left items-center">
                <h2>Assurance vie</h2>
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="px-2 text-left">
                                <p>
                                    <strong>Assurance mixte</strong>
                                </p>
                                <p>
                                    M. {userData.firstname} {userData.name}
                                </p>
                            </div>
                            <div className="px-2 text-center">
                                <p className="text-green-600 font-bold">200 000€</p>
                                <Link>
                                    <Button size="sm" radius="full" color="primary">
                                        Consulter
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
