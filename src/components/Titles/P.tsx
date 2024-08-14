export default function P({ children }: { children: string }) {
    return <p className="text-foreground-secondary font text-sm lg:text-lg max-w-screen-md mx-auto text-center px-3 pt-3 lg:pt-6">{children}</p>;
}
