"use client";

import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";
import TextareaField from "./TextareaField";
import { useRouter } from "next/navigation";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import "./Anim.css";

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "",
        features: [] as string[],
        budget: "",
        additionalInfo: "",
    });
    const [status, setStatus] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
    const [statusType, setStatusType] = useState<"success" | "error" | null>(
        null
    );
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            features: checked
                ? [...prev.features, name]
                : prev.features.filter((feature) => feature !== name),
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
        setLoading(true);
        setStatusType(null);

        try {
            const response = await fetch("/api/rezerwacja", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Quote request sent successfully!");
                setStatusType("success");
                setFormData({
                    name: "",
                    email: "",
                    type: "",
                    features: [],
                    budget: "",
                    additionalInfo: "",
                });

                setTimeout(() => {
                    router.push("/success");
                }, 1000);
            } else {
                setStatus("Failed to send quote request.");
                setStatusType("error");
            }
        } catch (error) {
            setStatus("Failed to send quote request.");
            setStatusType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative">
                <div className="h-[100vh] w-full bg-gray-200 absolute top-0 -z-10" />
                <h1 className="text-4xl text-black font-semibold tracking-wider py-8 text-center lg:py-24">
                    Zapytanie o <strong>rezerwacje</strong>
                </h1>
            </div>
            <div className="w-full mx-auto border py-12 rounded-t-2xl bg-white anim-bg-y-100">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 max-w-screen-md  mx-auto px-6 pb-12 anim-opacity"
                >
                    <InputField
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <SelectField
                        label="Type of Website"
                        name="type"
                        options={[
                            "Landing Page",
                            "Shop",
                            "Portfolio",
                            "Blog",
                            "Other",
                        ]}
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                    <div className="space-y-2">
                        <p className="font-medium">Features Required:</p>
                        <CheckboxField
                            label="Responsive Design"
                            name="Responsive Design"
                            checked={formData.features.includes(
                                "Responsive Design"
                            )}
                            onChange={handleCheckboxChange}
                        />
                        <CheckboxField
                            label="SEO Optimization"
                            name="SEO Optimization"
                            checked={formData.features.includes(
                                "SEO Optimization"
                            )}
                            onChange={handleCheckboxChange}
                        />
                        <CheckboxField
                            label="E-commerce Functionality"
                            name="E-commerce Functionality"
                            checked={formData.features.includes(
                                "E-commerce Functionality"
                            )}
                            onChange={handleCheckboxChange}
                        />
                        <CheckboxField
                            label="Contact Form"
                            name="Contact Form"
                            checked={formData.features.includes("Contact Form")}
                            onChange={handleCheckboxChange}
                        />
                        <CheckboxField
                            label="CMS Integration"
                            name="CMS Integration"
                            checked={formData.features.includes(
                                "CMS Integration"
                            )}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <InputField
                        label="Estimated Budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    />
                    <TextareaField
                        label="Additional Information"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    />
                    <SecondBtn type="submit">
                        {status ? (
                            <div className="text-sm flex items-center space-x-2">
                                {loading && (
                                    <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                                )}
                                <p
                                    className={`ml-2 ${
                                        statusType === "success"
                                            ? "text-green-500"
                                            : statusType === "error"
                                            ? "text-red-500"
                                            : "text-white"
                                    }`}
                                >
                                    {status}
                                </p>
                            </div>
                        ) : (
                            <span>Send Quote Request</span>
                        )}
                    </SecondBtn>
                </form>
            </div>
        </>
    );
}
