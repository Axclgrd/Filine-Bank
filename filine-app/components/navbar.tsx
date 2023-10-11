import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
    NavbarBrand,
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    SearchIcon, Home, Transfert, Card, Assu, MenuIcon,
} from "@/components/icons";
import {Logo} from "@/components/icons";
import {Button} from "@nextui-org/button";

export const Navbar = () => {

    return (
        <div>
            {/* Navbar pour desktop */}
            <div className="hidden lg:block">
                <NextUINavbar maxWidth="xl" position="sticky">
                    <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                        <NavbarBrand as="li" className="gap-3 max-w-fit">
                            <NextLink className="flex justify-start items-center gap-1" href="/">
                                <Logo/>
                                <p className="font-bold text-inherit">Filine - Banque</p>
                            </NextLink>
                        </NavbarBrand>
                        <ul className="hidden lg:flex gap-4 justify-start ml-2">
                            {siteConfig.navItems.map((item) => (
                                <NavbarItem key={item.href}>
                                    <NextLink
                                        className={clsx(
                                            "hover:text-primary",
                                            "data-[active=true]:text-primary data-[active=true]:font-medium"
                                        )}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </NextLink>
                                </NavbarItem>
                            ))}
                        </ul>

                    </NavbarContent>

                    <NavbarContent
                        className="hidden sm:flex basis-1/5 sm:basis-full"
                        justify="end"
                    >
                        <ThemeSwitch/>
                        <NavbarItem className="hidden md:flex">
                            <Link
                                isExternal
                                className="text-sm font-normal text-default-600 bg-default-100"
                                href={siteConfig.links.sponsor}
                            >
                                <Button>
                                    Déconnexion
                                </Button>
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-default-500"/>
                        </Link>
                        <ThemeSwitch/>
                    </NavbarContent>
                </NextUINavbar>
            </div>

            {/* Navbar pour mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full rounded-t-2xl bg-white shadow-large z-50">
                <div className="flex justify-around items-center py-5">
                    <div>
                        <Link
                            href="/"
                            className="flex flex-col items-center justify-center"
                        >
                            <Home className="text-default-500"/>
                            <p className="text-black text-xs">Comptes</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href={`/virements`}
                            className="flex flex-col items-center justify-center"
                        >
                            <Transfert className=""/>
                            <p className="text-black text-xs">Virements</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href={`/carte`}
                            className="flex flex-col items-center justify-center"
                        >
                            <Card className="text-default-500"/>
                            <p className="text-black text-xs">Cartes</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href={`/assurances`}
                            className="flex flex-col items-center justify-center"
                        >
                            <Assu/>
                            <p className="text-black text-xs">Assurances</p>
                        </Link>

                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href={`/more`}
                            className="flex flex-col items-center justify-center"
                        >
                            <MenuIcon/>
                            <p className="text-black text-xs">Plus</p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
