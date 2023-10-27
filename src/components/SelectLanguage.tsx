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

const defaultLang = "fr" as const;
const currentLang = LANGUAGES.find((lang) => lang.code === defaultLang)?.name;

export function SelectLanguage() {
  function onChange(lang: string) {
    const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split("/");
    const slug = rest.join("/");
    window.location.pathname = translatePath(slug, lang);
  }

  return (
    <Select.Root value={lang} onValueChange={onChange}>
      <Select.Trigger className="flex gap-x-2 items-center justify-center border border-border px-1 py-1 rounded text-sm outline-none">
        <Select.Icon>
          <TranslateIcon className="w-[18px] h-[18px]" />
        </Select.Icon>
        <Select.Value></Select.Value>
        <Select.Icon>
          <ChevronDownIcon className="w-[18px] h-[18px]" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="border border-border rounded w-[var(--radix-select-trigger-width)] bg-background"
          position="popper"
          sideOffset={2}
        >
          <Select.Viewport className="p-5px">
            {LANGUAGES.map((lang) => (
              <Select.Item
                key={lang.code}
                value={lang.code}
                className="relative gap-x-2 text-xs py-1 pie-10px pis-18px select-none rounded-sm data-[highlighted]:outline-none data-[highlighted]:bg-background/50"
              >
                <Select.ItemIndicator className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-16px">
                  <CheckIcon className="w-[12px] h-[12px]" />
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
