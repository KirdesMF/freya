import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, Ref } from "react";

type LinkProps = {
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof anchor>;

type LinkRef = Ref<HTMLAnchorElement>;

const anchor = cva("inline-flex items-center gap-x-1", {
  variants: {
    intent: {
      "primary-btn": "bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm",
      "secondary-btn":
        "bg-background text-foreground border border-border rounded-md px-3 py-2 text-sm",
      text: "text-blue hover:text-blue-500 underline",
    },
  },
  defaultVariants: {
    intent: "secondary-btn",
  },
});

export const Link = forwardRef((props: LinkProps, ref: LinkRef) => {
  const { children, className, external = false, intent, ...rest } = props;

  return (
    <a
      ref={ref}
      className={anchor({ className, intent })}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
});
