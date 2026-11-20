import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "light" | "outline-light" | "outline-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 h-12 text-[15px] font-semibold tracking-[0.005em] transition-colors duration-200 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-flame text-white hover:bg-flame-dark",
  light: "bg-white text-ink hover:bg-paper",
  "outline-light":
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

type ButtonLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
};

function Button({
  buttonText,
  type = "button",
  disabled,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={buttonClass(variant, className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
