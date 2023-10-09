import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import {subtitle} from "@/components/primitives";
import {text} from "stream/consumers";
import {blue, red} from "color-name";
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<Divider className="my-4" />
						<footer className="w-full py-3 grid grid-cols-3 gap-4 items-center justify-center">
							<div className="flex flex-col items-center justify-center">
								{/* Contenu de la première colonne */}
								<p>Mentions légals</p>
								<p>Traitement des données</p>
								<p>CGU</p>
							</div>

							<div className="flex flex-col items-center justify-center">
								{/* Contenu de la deuxième colonne */}
								<p>Filine Banque</p>
								<p>Une filiale du groupe ATSBANCK</p>
							</div>

							<div className="flex flex-col items-center justify-center">
								{/* Contenu de la troisième colonne */}
								<p>Site fictif, developper par :</p>
								<p>Axel Guillouard</p>
								<p>Baptiste Rodrigues</p>
								<p>Cyprien Bourre</p>
								<p>Amandine Lafontaine</p>
							</div>
						</footer>

					</div>
				</Providers>
			</body>
		</html>
	);
}
