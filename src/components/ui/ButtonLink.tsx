import { cva, cx, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";

type LinkProps = {
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof anchor>;

type LinkRef = Ref<HTMLAnchorElement>;

const anchor = cva("inline-flex items-center gap-x-1  rounded px-3 py-2 text-sm", {
  variants: {
    intent: {
      primary: "text-primary-foreground bg-primary hover:bg-primary/80",
      secondary: "text-foreground bg-background border border-border",
    },
  },
});

export const ButtonLink = forwardRef((props: LinkProps, ref: LinkRef) => {
  const { children, className, external = false, intent = "secondary", ...rest } = props;

  return (
    <a
      ref={ref}
      className={cx(className, anchor({ intent }))}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
});
