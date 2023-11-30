import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof badge>;

const badge = cva(
  "font-600 grid place-items-center rounded px-2 py-1 text-xs whitespace-nowrap max-w-max",
  {
    variants: {
      intent: {
        primary: "bg-primary/10 text-primary",
        blue: "bg-blue/10 text-blue",
        red: "bg-red/10 text-red",
        orange: "bg-orange/10 text-orange",
        purple: "bg-purple/10 text-purple",
        green: "bg-green/10 text-green",
        yellow: "bg-yellow/10 text-yellow",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

export function Badge({ children, className, intent }: BadgeProps) {
  return <div className={badge({ className, intent })}>{children}</div>;
}
