import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-lg transition";
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  );
};

export default Button;