import { SunIcon } from "./icons/SunIcon";
import * as Tooltip from "@radix-ui/react-tooltip";

export function SwitchColorScheme() {
  return (
    <Tooltip.Provider delayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button">
            <SunIcon className="w-[18px] h-[18px]" />
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={3}
            className="bg-bluegray-1 rounded px-2 py-1 leading-none shadow"
          >
            <span className="font-400 text-xs">Toggle theme</span>
            <Tooltip.Arrow className="fill-bluegray-1" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
