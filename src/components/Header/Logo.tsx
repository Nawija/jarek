import Image from "next/image";
import Link from "next/link";

export default function Logo({
    closeMenu,
    h,
    w,
}: {
    closeMenu: () => void;
    h: number;
    w: number;
}) {
    return (
        <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-center"
        >
            <p className="text-base tracking-wide lg:text-xl font-semibold flex">
                Jarek Olszewski
            </p>
        </Link>
    );
}
