"use client"
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import {Avatar} from "@nextui-org/react";
import {ThemeSwitch} from "@/components/theme-switch";

export default function VirementPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className={`${title()} text-left md:text-left`}>Plus</h1>
            <Card>
                <CardBody>
                    <div className="flex place-content-around">
                        <Avatar name="AG" />
                        <div className="mx-5 grid">
                            <h2 className="text-lg font-semibold">Axel Guillouard</h2>
                            <p className="text-xs">Profile et données personnel</p>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Divider className="mt-3" />
            <div className="flex justi">
            <p className="text-left font-semibold">Mutuelle</p>
            </div>
            <Divider className="mt-0" />
            <p className="text-left font-semibold">Souscrire</p>
            <Divider className="mt-0" />
            <p className="text-left font-semibold">Contactez mon agence</p>
            <Divider className="mt-0" />
            <ThemeSwitch/>
        </div>
    );
}
