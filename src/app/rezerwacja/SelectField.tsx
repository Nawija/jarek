import './SelectField.css'

interface SelectFieldProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
}

export default function SelectField({
    label,
    name,
    options,
    value,
    onChange,
    required = false,
}: SelectFieldProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-2 font-medium">
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="border border-border-primary rounded-lg p-2 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                        className="focus:bg-emerald-600 hover:bg-emerald-600"
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
