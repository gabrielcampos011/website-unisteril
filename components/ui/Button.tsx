import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-brand-green text-white rounded-full hover:bg-[#009040]",
  secondary: "border border-brand-green text-brand-green rounded hover:bg-light-green",
  ghost: "text-brand-green hover:underline",
  white: "bg-white text-dark-green rounded-full hover:bg-light-green",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: undefined;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButtonProps)}>
      {children}
    </button>
  );
}
