import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				type={type}
				className={cn(
					"w-auto rounded-full bg-slate-900 border border-transparent px-5 py-3 text-center disabled:cursor-not-allowed disabled:opacity-50 text-slate-50 font-semibold hover:opacity-80 transition",
					disabled && "opacity-50 cursor-not-allowed",
					className
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;
