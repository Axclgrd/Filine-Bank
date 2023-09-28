"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import CompteCourant from "@/components/cc";
import CompteEpargne from "@/components/ce";
import AssuVie from "@/components/assuvie";


export default function Home() {
	let tabs = [
		{
			id: "tous",
			label: "Tous",
			content: <><CompteCourant  /> <div className="mt-5"></div> <CompteEpargne /></>,

		},
		{
			id: "epargne",
			label: "Epargne",
			content: <><CompteEpargne /></>
		},
		{
			id: "assu-vie",
			label: "Assurance vie",
			content: <><AssuVie/></>
		},
		{
			id: "mutuelle",
			label: "Mutuelle",
			content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	];
	return (
		<section className="flex flex-col items-start gap-4 ">
			<div className="flex">
				<div className="inline-block max-w-lg text-left">
					<h1 className={title()}>Bonjour&nbsp;</h1>
					<h1 className={title()}>Prenom&nbsp;</h1>
					<h1 className={title()}>Nom&nbsp;,</h1>
				</div>
			</div>

			<div className="mt-3 w-full">
				<Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
					{(item) => (
						<Tab key={item.id} title={item.label}>
							<Card>
								<CardBody>
									{item.content}
								</CardBody>
							</Card>
						</Tab>
					)}
				</Tabs>

			</div>
		</section>

	);
}
