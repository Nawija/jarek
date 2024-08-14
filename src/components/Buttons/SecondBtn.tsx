import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function SecondBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative rounded-lg border border-border-primary bg-background-secondary px-4 py-2 text-sm font-medium transition-colors text-foreground-primary",
                className
            )}
        >
            {children}
        </button>
    );
}
