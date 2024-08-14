import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative rounded-lg bg-accent-primary px-4 py-2 text-sm font-medium transition-colors text-background-primary",
                className
            )}
        >
            {children}
        </button>
    );
}
