interface TextareaFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
}

export default function TextareaField({
    label,
    name,
    value,
    onChange,
    required = false,
}: TextareaFieldProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-2 font-medium">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                rows={4}
                value={value}
                onChange={onChange}
                required={required}
                className="border border-border-primary text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
        </div>
    );
}
