'use client'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import {Checkbox} from "@nextui-org/checkbox";
import {useDisclosure} from "@nextui-org/use-disclosure";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import {link as linkStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
    UserIcon,
} from "@/components/icons";

import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';

import {Logo} from "@/components/icons";



export const Navbar = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const SiteConfigMob = [
        "Accueil",
        "Compte Courant",
        "Assurance Vie",
        "Mutuelle"
    ];

    const redirectToAnotherPage = () => {
        // Effectuez la redirection vers une autre page ici
        window.location.href = 'https://app.filine-bank.tech/';
    };



    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">Filine Banque</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
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
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button className="text-sm font-normal text-default-600 bg-default-100" startContent={<UserIcon className="text-danger"/>}
                            variant="flat" onPress={() => { onOpen(); redirectToAnotherPage(); }} color="primary">Mon espace</Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item) => (
                        <NavbarMenuItem key={item.href}>
                            <Link
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>

                        </NavbarMenuItem>
                    ))}
                      <Button className="text-sm font-normal text-default-600 bg-default-100" startContent={<UserIcon className="text-danger"/>}
                              variant="flat" onPress={() => { onOpen(); redirectToAnotherPage(); }} color="primary">Mon espace</Button>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
