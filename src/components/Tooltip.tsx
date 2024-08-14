type TooltipProps = {
    children: React.ReactNode;
    text: string;
};

export default function Tooltip({ children, text }: TooltipProps) {
    return (
        <div className="relative group inline-block">
            {children}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs bg-black text-white text-sm rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                {text}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black"></div>
            </div>
        </div>
    );
}
