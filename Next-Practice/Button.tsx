'use client'
import React from "react";
interface ButtonProps {
    title: string;
    className?: string;
    onClick: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}

function Button({ title, className, onClick, isLoading, isDisabled }: ButtonProps) {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={isLoading || isDisabled}
        >
            {isLoading ? 'Loading...' : title}
        </button>
    );
}

export default Button;