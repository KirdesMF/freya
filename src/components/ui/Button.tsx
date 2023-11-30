import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, Ref } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonRef = Ref<HTMLButtonElement>;

const button = cva(
  "inline-flex items-center gap-x-1 rounded-md px-3 py-2 border border-border text-sm",
);

export const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { children, className, type = "button", ...rest } = props;

  return (
    <button ref={ref} className={button({ className })} type={type} {...rest}>
      {children}
    </button>
  );
});
