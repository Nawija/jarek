interface CheckboxFieldProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxField({
    label,
    name,
    checked,
    onChange,
}: CheckboxFieldProps) {
    return (
        <div className="flex items-center space-x-2">
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-600"
            />
            <label htmlFor={name} className="font-medium">
                {label}
            </label>
        </div>
    );
}
