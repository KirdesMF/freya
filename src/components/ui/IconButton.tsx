import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, Ref } from "react";

type IconButtonProps = { label: string } & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

type IconButtonRef = Ref<HTMLButtonElement>;

const button = cva("inline-grid place-items-center rounded-md border border-border", {
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

export const IconButton = forwardRef((props: IconButtonProps, ref: IconButtonRef) => {
  const { children, className, type = "button", label, size, ...rest } = props;

  return (
    <button
      ref={ref}
      className={button({ className, size })}
      type={type}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
});
