export default function H1({ children }: { children: string }) {
    return <h1 className="text-foreground-primary font text-2xl lg:text-6xl font-medium max-w-screen-md mx-auto text-center px-2">{children}</h1>;
}
