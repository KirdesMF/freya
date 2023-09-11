import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function LanguageMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="font-bold">FR</DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>EN</DropdownMenu.Item>
        <DropdownMenu.Item>NL</DropdownMenu.Item>
        <DropdownMenu.Item>FR</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
