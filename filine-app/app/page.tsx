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

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Votre&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>espace&nbsp;</h1>
				<h1 className={title()}>
					Filine
				</h1>
			</div>

			<div className="grid text-center items-center justify-center gap-3">
				<h2> Connexion :</h2>

				<Input type="email" label="Email" className="max-w-[220px]"/>
				<Link
					href="/connexion"
				>
				<Button color="primary" className="w-full">Connexion</Button>
				</Link>
				<Link
					href="/register"
				>
					<Button color="success" className="w-full">Ouvrir un compte</Button>
				</Link>



			</div>

			<div className="mt-8">

			</div>
		</section>
	);
}
