import { BaseTooltip } from "@components/BaseTooltip";
import { MoonIcon } from "@components/icons/MoonIcon";
import { SunIcon } from "@components/icons/SunIcon";
import * as React from "react";
import { ScreenIcon } from "./icons/ScreenIcon";

export function ToggleMode() {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  function setTheme(theme: "theme-light" | "dark" | "system") {
    setThemeState(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <BaseTooltip>
      <div className="flex gap-x-2 items-center">
        <button type="button" onClick={() => setTheme("theme-light")}>
          <SunIcon />
        </button>

        <button type="button" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </button>

        <button type="button" onClick={() => setTheme("system")}>
          <ScreenIcon />
        </button>
      </div>
    </BaseTooltip>
  );
}
