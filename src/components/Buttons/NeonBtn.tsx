import clsx from "clsx";
import "./NeonBtn.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function NeonBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "xx relative rounded-md hover:rounded-lg px-4 py-2 text-sm font-medium",
                className
            )}
        >
            <span />
            <span />
            <span />
            <span />
            {children}
        </button>
    );
}
