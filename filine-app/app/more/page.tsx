"use client"
import {subtitle, title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Divider} from "@nextui-org/divider";
import {Card, CardBody} from "@nextui-org/card";
import {Avatar} from "@nextui-org/react";
import {ThemeSwitch} from "@/components/theme-switch";
import React from "react";
import {Arrow} from "@/components/icons";
import {Link} from "@nextui-org/link";

export default function VirementPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <h1 className={`${title()} text-left md:text-left`}>Plus</h1>
            <div className="mt-2 flex justify-center items-center">
            <Card className="w-[350px]">
                <CardBody>
                    <div className="flex place-content-around">
                        <Avatar isBordered color="warning" classNames={{
                            base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]"
                        }}
                                src="/memoji_ag.png" size="lg" />
                        <div className="mx-5 grid">
                            <h2 className="text-lg font-semibold">Axel Guillouard</h2>
                            <p className="text-xs">Profile et données personnel</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>

            <Divider className="mt-3"/>
            <Link
                href="/mutuelle"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Mutuelle</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/mutuelle"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Souscrire</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/contact"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Contactez mon agence</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <Link
                href="/credit"
                className="flex justify-between mt-2 mb-2 text-current"
            >
                <p className="text-left font-semibold">Demande de crédit conso</p>
                <Arrow></Arrow>
            </Link>

            <Divider className="mt-0"/>

            <div className="flex justify-between mt-2 mb-2 text-current">
                <p>Changer le thème de l'apps</p>
                <ThemeSwitch/>
            </div>

        </div>
    );
}
