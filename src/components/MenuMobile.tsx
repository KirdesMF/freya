import * as Dialog from "@radix-ui/react-dialog";
import { MenuBurgerIcon } from "./icons/MenuBurgerIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@i18n/utils";
import { useState } from "react";
import { ToggleMode } from "./ToggleMode";

const url = new URL(window.location.href);
const lang = getLangFromUrl(url);
const t = useTranslations(lang);
const translatePath = useTranslatedPath(lang);

const LINKS = [
  { href: "/", label: t("nav.home") },
  { href: "/pricing", label: t("nav.prices") },
  { href: "/#about", label: t("nav.about") },
  { href: "/#contact", label: t("nav.contact") },
];

export function MenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <MenuBurgerIcon />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="bg-background fixed inset-0 grid place-items-center">
          <nav className="gap-x-sm flex flex-col items-center">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={translatePath(href)}
                className="text-foreground hover:text-primary font-gabarito text-2xl "
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <ToggleMode />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
