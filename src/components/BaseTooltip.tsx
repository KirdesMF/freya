import * as Tooltip from "@radix-ui/react-tooltip";

export function BaseTooltip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip.Provider delayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={3}
            className="bg-accent rounded px-2 py-1 leading-none shadow"
          >
            <span className="font-400 text-xs">Toggle theme</span>
            <Tooltip.Arrow className="fill-accent" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
