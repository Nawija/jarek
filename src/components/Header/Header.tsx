"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainBtn } from "../Buttons/MainBtn";
import { SecondBtn } from "../Buttons/SecondBtn";

const NAVIGATION_LINKS = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "services", href: "/services" },
    { label: "contact", href: "/contact" },
];

export default function Header() {
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
                    ? "backdrop-blur-md bg-white/60"
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
                    } absolute border-b lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 border-border-primary transition-transform top-full left-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-max p-10 lg:p-0 lg:py-1 w-full flex items-center lg:border lg:px-3 lg:rounded-xl justify-center flex-col lg:flex-row bg-white`}
                >
                    {NAVIGATION_LINKS.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={closeMenu}
                                className="capitalize font-medium text-lg lg:text-sm hover:text-yellow-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <div className="lg:hidden flex items-center justify-center flex-wrap gap-3 pt-8">
                        <ButtonsNav closeMenu={closeMenu} />
                    </div>
                </ul>
                <div className="hidden lg:flex space-x-2">
                    <ButtonsNav closeMenu={closeMenu} />
                </div>
            </nav>
        </header>
    );
}

function ButtonsNav({ closeMenu }: { closeMenu: () => void }) {
    return (
        <>
            <Link href="/rezerwacja" onClick={closeMenu}>
                <MainBtn>Rezerwacja</MainBtn>
            </Link>
            <Link href="/" onClick={closeMenu}>
                <SecondBtn>Wycena</SecondBtn>
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
                } w-4 h-[2px] transition-transform bg-black rounded-3xl`}
            />
            <div
                className={`${
                    showMenu ? "opacity-0" : ""
                } w-3 h-[2px] transition-opacity bg-black rounded-3xl`}
            />
            <div
                className={`${
                    showMenu ? "-rotate-45 -translate-y-2" : ""
                } w-4 h-[2px] transition-transform bg-black rounded-3xl`}
            />
        </button>
    );
}
