"use client"
import {subtitle, title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Switch} from "@nextui-org/switch";
import {AddtoWallet, Arrow, Mastercard, Visa} from "@/components/icons";
import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {useDisclosure} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {color} from "framer-motion";


export default function CCPage() {
    const [isBlurred, setIsBlurred] = useState(true);
    return (

        <div className="container text-left mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
            <Button color="primary">
                Retour
            </Button>

            <h1 className={title()}>Compte Courant</h1>


            <div className="flex mt-3 gap-4 items-center">
                <p>Votre solde est de</p>
                <Button color="success">
                    2100€
                </Button>
            </div>
            <br/>

            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>DATE</TableColumn>
                    <TableColumn>COST</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>20/03/2023</TableCell>
                        <TableCell className="text-green-600">+11,43</TableCell>


                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>26/03/2023</TableCell>
                        <TableCell className="text-red-600">-30,21</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>16/04/2023</TableCell>
                        <TableCell className="text-green-600">+25</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>22/04/2023</TableCell>
                        <TableCell className="text-red-600">-45,39</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>
    );
}
