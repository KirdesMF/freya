import { cva, cx } from "class-variance-authority";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";

type LinkProps = {
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkRef = Ref<HTMLAnchorElement>;

const anchor = cva("inline-flex items-center gap-x-1 underline");

export const Link = forwardRef((props: LinkProps, ref: LinkRef) => {
  const { children, className, external = false, ...rest } = props;

  return (
    <a
      ref={ref}
      className={cx(className, anchor())}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
});
