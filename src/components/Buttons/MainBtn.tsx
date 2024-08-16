import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative rounded-lg px-4 border py-2 text-sm font-medium text-white bg-gradient-to-t from-yellow-500 to-yellow-700",
                className
            )}
        >
            {children}
        </button>
    );
}
