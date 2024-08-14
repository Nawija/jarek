"use client";

import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

export default function CopyToClipboard({
    textToCopy,
}: {
    textToCopy: string;
}) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={copyToClipboard}
            className={
                "relative rounded-lg border border-border-primary bg-background-secondary p-1.5 opacity-80 mx-2 text-xs lg:text-sm font-medium transition-colors text-foreground-primary hover:text-foreground-secondary"
            }
        >
            {copied ? (
                <MdDone size={13} className="text-green-300" />
            ) : (
                <FaCopy size={13} />
            )}
        </button>
    );
}
