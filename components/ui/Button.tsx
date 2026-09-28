import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

type Variant = "default" | "outline" | "secondary" | "ghost";
type Size = "default" | "sm" | "icon";

const base =
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

const variants: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizes: Record<Size, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  icon: "h-9 w-9",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  href?: string;
}

export default function Button({
  as: Component = "button",
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
