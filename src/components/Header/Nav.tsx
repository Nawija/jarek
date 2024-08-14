"use client";

import { NAVIGATION_LINKS } from "@/constants/routers";
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainBtn } from "../Buttons/MainBtn";
import { SecondBtn } from "../Buttons/SecondBtn";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY !== 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    function closeMenu() {
        setShowMenu(false);
    }
    return (
        <header
            className={`w-full z-[998] border-b transition-colors duration-300 sticky top-0 ${
                isScrolled || showMenu
                    ? "border-border-primary backdrop-blur-md bg-background-primary"
                    : "border-transparent"
            }`}
        >
            <nav className="max-w-screen-2xl mx-auto py-4 px-6 flex items-center justify-between">
                <Logo closeMenu={closeMenu} h={25} w={25} />

                <BurgerMenu
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                />
                <ul
                    className={`${
                        showMenu
                            ? "translate-x-0"
                            : " -translate-x-full lg:-translate-x-1/2"
                    } absolute border-b lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 border-border-primary transition-transform top-full left-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-max p-10 lg:p-0 lg:py-1 w-full flex items-center lg:border lg:bg-background-secondary lg:px-3 lg:rounded-xl justify-center flex-col lg:flex-row bg-background-primary`}
                >
                    {NAVIGATION_LINKS.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className="capitalize font-medium text-lg lg:text-sm hover:text-foreground-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <div className="lg:hidden flex items-center justify-center flex-wrap gap-3 pt-8">
                        <ButtonsNav />
                    </div>
                </ul>
                <div className="hidden lg:flex space-x-2">
                    <ButtonsNav />
                </div>
            </nav>
        </header>
    );
}

function ButtonsNav() {
    return (
        <>
            <MainBtn>Gallery</MainBtn>
            <Link href="/free-quote">
                <SecondBtn>Free Quote</SecondBtn>
            </Link>
        </>
    );
}

function BurgerMenu({
    handleShowMenu,
    showMenu,
}: {
    handleShowMenu: () => void;
    showMenu: boolean;
}) {
    return (
        <button
            onClick={handleShowMenu}
            className="flex flex-col items-start p-2 justify-center space-y-1 lg:hidden"
        >
            <div
                className={`${
                    showMenu ? "rotate-[405deg] translate-y-1" : ""
                } w-4 h-[2px] transition-transform bg-foreground-primary rounded-3xl`}
            />
            <div
                className={`${
                    showMenu ? "opacity-0" : ""
                } w-3 h-[2px] transition-opacity bg-foreground-primary rounded-3xl`}
            />
            <div
                className={`${
                    showMenu ? "-rotate-45 -translate-y-2" : ""
                } w-4 h-[2px] transition-transform bg-foreground-primary rounded-3xl`}
            />
        </button>
    );
}
