"use client"
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React from "react";
import {getKeyValue} from "@nextui-org/shared-utils";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";

const rows = [
    {
        key: "1",
        enseigne: "McDonald's France",
        pays: "France",
        montant: "16,50 €",
    },
    {
        key: "2",
        enseigne: "Carrefour",
        pays: "France",
        montant: "124,89 €",
    },
    {
        key: "3",
        enseigne: "Mercedes Benz",
        pays: "Allemagne",
        montant: "80 560 €",
    },
    {
        key: "4",
        enseigne: "Paul",
        pays: "France",
        montant: "4,50 €",
    },
    {
        key: "5",
        enseigne: "Domino's Pizza",
        pays: "France",
        montant: "24,50 €",
    },
    {
        key: "6",
        enseigne: "Pizza Jasmine",
        pays: "France",
        montant: "8,50 €",
    },
    {
        key: "7",
        enseigne: "Buraliste du chateau",
        pays: "France",
        montant: "11,50 €",
    },
];

const columns = [
    {
        key: "enseigne",
        label: "ENSEINGNE",
    },
    {
        key: "pays",
        label: "PAYS",
    },
    {
        key: "montant",
        label: "MONTANT",
    },
];
export default function TransactionPage() {
    return (
        <div className="container w-full md:w-full lg:px-20 px-4 sm:px-6">
            <h1 className={`${title()} text-center md:text-left`}>Transactions</h1>
            <Table className={"mt-5"} aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>
    );
}
