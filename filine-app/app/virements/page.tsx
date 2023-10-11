import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";

export default function VirementPage() {
    return (
        <div className="container w-full md:w-full lg:px-20 px-4 sm:px-6">
            <h1 className={`${title()} text-center md:text-left`}>Virements</h1>
            <h1 className={`${subtitle()} text-left md:text-left mt-2`}>Je fais un virement de </h1>

            <div className="mt-5">
                <Input
                    type="number"
                    inputMode="decimal"
                    placeholder="0.00"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">€</span>
                        </div>
                    }
                />
                <p className="text-sm text-default-600 mt-1">Instantaner pour les virements en dessous de 300€</p>
            </div>

            <div className="grid mt-5 gap-4 grid-cols-1">
                <Button
                    radius="full"
                    color="primary"
                    variant="shadow"
                >
                    Virement compte à compte
                </Button>
                <Button
                    radius="full"
                    color="success"
                    variant="shadow"
                >
                    Virement entre amis
                </Button>
                <Button
                    radius="full"
                    color="warning"
                    variant="shadow"
                >
                    Virement externe
                </Button>

            </div>

            <div className="mt-8">
                <h2 className={`${subtitle()} text-left md:text-left`}>Plus de services</h2>
                <Divider className="my-2" />
                <Card>
                    <CardBody>
                        <p>Virement international</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
