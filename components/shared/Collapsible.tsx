// components/shared/Collapsible.tsx
"use client";
import { ReactNode, useState } from "react";
import { ChevronDown } from "react-feather";

interface CollapsibleProps {
    label: string;
    children: ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={toggle}
                className="w-full text-left flex items-center justify-between"
            >
                <span className="font-semibold">{label}</span>
                <ChevronDown
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>
            {isOpen && <div className="mt-2 text-gray-600">{children}</div>}
        </div>
    );
};

export default Collapsible;