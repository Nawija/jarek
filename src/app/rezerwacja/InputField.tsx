interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function InputField({
    label,
    name,
    type,
    value,
    onChange,
    required = false,
}: InputFieldProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-2 font-medium">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className="border border-border-primary rounded-lg p-2 text-black focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
        </div>
    );
}
