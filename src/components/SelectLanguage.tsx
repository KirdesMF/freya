import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "./icons/ChevronDownIcon.tsx";
import { TranslateIcon } from "./icons/TranslateIcon.tsx";
import { CheckIcon } from "./icons/CheckIcon.tsx";
import { getLangFromUrl, useTranslatedPath } from "@i18n/utils.ts";

const LANGUAGES = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "nl", name: "Nederlands" },
];
const lang = getLangFromUrl(new URL(window.location.href));
const translatePath = useTranslatedPath(lang);

export function SelectLanguage() {
  function onChange(lang: "fr" | "en" | "nl") {
    const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split("/");

    // TODO: find a more robust way to handle this
    if (lang !== "fr" && rest.length === 0) {
      rest.push(_oldLang);
    }

    const slug = `/${rest.join("/")}`;
    window.location.pathname = translatePath(slug, lang);
  }

  return (
    <Select.Root value={lang} onValueChange={onChange}>
      <Select.Trigger className="border-border flex items-center justify-center gap-x-2 rounded border  px-1 py-1 text-sm outline-none">
        <Select.Icon>
          <TranslateIcon className="h-[18px] w-[18px]" />
        </Select.Icon>
        <Select.Value></Select.Value>
        <Select.Icon>
          <ChevronDownIcon className="h-[18px] w-[18px]" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="border-border bg-background w-[var(--radix-select-trigger-width)] rounded border"
          position="popper"
          sideOffset={2}
        >
          <Select.Viewport className="p-5px">
            {LANGUAGES.map((lang) => (
              <Select.Item
                key={lang.code}
                value={lang.code}
                className="pie-10px pis-18px data-[highlighted]:bg-background/50 relative select-none gap-x-2 rounded-sm py-1 text-xs data-[highlighted]:outline-none"
              >
                <Select.ItemIndicator className="w-16px absolute bottom-0 left-0 top-0 flex items-center justify-center">
                  <CheckIcon className="h-[12px] w-[12px]" />
                </Select.ItemIndicator>

                <Select.ItemText>{lang.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
