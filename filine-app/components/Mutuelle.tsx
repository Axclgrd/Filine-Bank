import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { useState, useEffect } from "react";
import { fetchUserData } from "../app/api"; // Assurez-vous d'importer la fonction depuis votre fichier api
import {Image} from "@nextui-org/image";


export default function Mutuelle() {
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
                <h2>Mutuelle</h2>
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex">
                            <Image src="/assurance1.png" width={200} />
                        
                            <div className="px-2 text-left">
                                <p>
                                    <strong>Mutuelle Cobalt</strong>
                                </p>
                                <p>
                                    Forfait Cobalt
                                    Couverture :
                                    Ce forfait offre une couverture de base pour les soins de santé essentiels, y compris les consultations médicales, les médicaments génériques, et les examens médicaux de routine.
                                    </p>
                            

                            </div>
                            </div>
                    </CardBody>
                </Card>
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex">
                            <Image src="/assurance1.png" width={200} />
                        
                            <div className="px-2 text-left">
                                <p>
                                    <strong>Mutuelle Lithium</strong>
                                </p>
                                <p>
                                Forfait Lithium
                                    Couverture :
                                    Spécialement conçu pour les adhérents plus âgés, ce forfait met l'accent sur la prévention et le bien-être, en plus de la couverture médicale de base.
                                    </p>
                            </div>
                            </div>
                    </CardBody>
                </Card>
                
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex">
                            
                            <Image src="/carte_mastercard.png" width={200} />
                        
                            <div className="px-2 text-left">
                                <p>
                                    <strong>Mutuelle Lithium</strong>
                                </p>
                                <p>
                                Forfait Titanium
                                    Couverture :
                                    Ce forfait est conçu pour les familles et offre une couverture étendue pour les soins de santé de toute la famille, y compris les soins pédiatriques, la maternité et les soins dentaires
                                    </p>
                            </div>
                            </div>
                    </CardBody>
                </Card>


            </div>
        </>
    );
}
