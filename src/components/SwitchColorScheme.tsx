import * as Switch from "@radix-ui/react-switch";

export function SwitchColorScheme() {
  return (
    <Switch.Root className="w-[38px] h-[22px] border border-gray-5 rounded-full">
      <Switch.Thumb className="rounded-full w-[20px] h-[20px] bg-black border border-white block will-change-transform transition-transform duration-100 data-[state=checked]:translate-x-[16px]" />
    </Switch.Root>
  );
}
