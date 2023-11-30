import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, Ref } from "react";

type IconLinkProps = {
  external?: boolean;
  label: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof anchor>;

type IconLinkRef = Ref<HTMLAnchorElement>;

const anchor = cva("inline-grid place-items-center border border-border rounded", {
  variants: {
    size: {
      small: "w-4 h-4",
      medium: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const IconLink = forwardRef((props: IconLinkProps, ref: IconLinkRef) => {
  const { children, className, external = false, label, size, ...rest } = props;

  return (
    <a
      ref={ref}
      className={anchor({ className, size })}
      aria-label={label}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
});
