export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Filine - Banque et Assurance 100% en ligne",
	description: "Filine est une banque et assurance 100% en ligne. Ouvrez un compte courant, une assurance vie ou une mutuelle en quelques minutes.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/mutuelle",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/assurance-vie",
    },
    {
      label: "About",
      href: "/compte-courant",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
