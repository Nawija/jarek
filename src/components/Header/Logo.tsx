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
            <Image
                src="/logo.svg"
                alt="logo seovileo"
                className="mr-1.5"
                height={h || 25}
                width={w || 25}
            />
            <p className="text-xs lg:text-sm font-semibold text-foreground-primary flex">
                Seovileo
            </p>
        </Link>
    );
}
