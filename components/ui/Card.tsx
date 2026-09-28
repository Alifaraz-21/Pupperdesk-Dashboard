import { HTMLAttributes, ReactNode } from "react";

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  return (
    <div
      className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`px-6 ${className}`}>{children}</div>;
}

export function CardTitle({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`font-semibold leading-none ${className}`}>{children}</div>;
}

export function CardContent({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`px-6 ${className}`}>{children}</div>;
}
