import { cva, cx } from "class-variance-authority";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonRef = Ref<HTMLButtonElement>;

const button = cva(
  "inline-grid place-items-center rounded-md border border-border text-sm w-4 h-4",
);

export const ButtonIcon = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { children, className, type = "button", ...rest } = props;

  return (
    <button ref={ref} className={cx(className, button())} type={type} {...rest}>
      {children}
    </button>
  );
});
