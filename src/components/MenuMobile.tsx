import * as Dialog from "@radix-ui/react-dialog";
import { MenuBurgerIcon } from "./icons/MenuBurgerIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { getLangFromUrl, useTranslatedPath, useTranslations } from "@i18n/utils";
import { useState } from "react";
import { ToggleMode } from "./ToggleMode";
import { IconButton } from "./ui/IconButton";
import { IconLink } from "./ui/IconLink";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";
import { LinkedInIcon } from "./icons/LinkedinIcon";

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

const LANGUAGES = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "nl", name: "Nederlands" },
] as const;

function setLanguageHref(lang: "fr" | "en" | "nl") {
  const [_leadingSlash, _oldLang, ...rest] = url.pathname.split("/");

  // TODO: find a more robust way to handle this
  if (lang !== "fr" && rest.length === 0) {
    rest.push(_oldLang);
  }

  const slug = `/${rest.join("/")}`;
  return translatePath(slug, lang);
}

export function MenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <MenuBurgerIcon />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="bg-background fixed inset-0 px-6 py-4">
          <div className="flex justify-end gap-x-4">
            <ToggleMode />
            <Dialog.Close asChild>
              <IconButton label="close">
                <CloseIcon />
              </IconButton>
            </Dialog.Close>
          </div>

          <div className="grid h-full place-content-center gap-y-8">
            <nav className="flex flex-col items-center gap-y-2">
              {LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={translatePath(href)}
                  className="text-foreground hover:text-primary font-gabarito font-700 text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div role="separator" className="h-1px bg-accent w-full"></div>

            <nav className="flex gap-x-2">
              {LANGUAGES.map(({ code, name }) => (
                <a key={code} href={setLanguageHref(code)}>
                  {name}
                </a>
              ))}
            </nav>

            <div role="separator" className="h-1px bg-accent w-full"></div>

            <IconLink
              label="linkedin"
              href="https://www.linkedin.com/in/freya-palsma/"
              external
              className="place-self-center"
            >
              <LinkedInIcon aria-hidden className="w-16px h-16px" />
            </IconLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
