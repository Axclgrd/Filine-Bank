export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Filine — Banque en ligne",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Accueil",
			href: "/",
		},
    {
      label: "Compte Courant",
      href: "/compte-courant",
    },
    {
      label: "Assurance Vie",
      href: "/assurance-vie",
    },
    {
      label: "Mutuelle",
      href: "/mutuelle",
    }
	],
	navMenuItems: [
		{
			label: "Accueil",
			href: "/",
		},
		{
            label: "Compte Courant",
            href: "/compte-courant",
		},
		{
			label: "Assurance Vie",
			href: "/assurance-vie",
		},
		{
			label: "Mutuelle",
			href: "/mutuelle",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
