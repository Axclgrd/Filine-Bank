import {subtitle, title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";

export default function CompteEpargne() {
    return (
        <>
            <div className="grid w-full text-left items-center">
                <h2>Comptes épargnes :</h2>
                <Card className="mt-4">
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="px-2 text-left">
                                <p><strong>Livret A</strong></p>
                                <p>M. PRENOM NOM</p>
                            </div>
                            <div className="px-2 text-center">
                                <p className="text-green-600 font-bold">+ 30 000€</p>
                                <Link>
                                    <Button size="sm" radius="full" color="primary">
                                        Consulter
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card  className="mt-4">
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="px-2 text-left">
                                <p><strong>Livret jeune</strong></p>
                                <p>M. PRENOM NOM</p>
                            </div>
                            <div className="px-2 text-center">
                                <p className="text-green-600 font-bold">+ 25 000€</p>
                                <Link>
                                    <Button size="sm" radius="full" color="primary">
                                        Consulter
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card  className="mt-4">
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="px-2 text-left">
                                <p><strong>PEA</strong></p>
                                <p>M. PRENOM NOM</p>
                            </div>
                            <div className="px-2 text-center">
                                <p className="text-green-600 font-bold">+ 50 360€</p>
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
