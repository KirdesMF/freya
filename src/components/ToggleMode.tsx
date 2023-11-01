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
    <BaseTooltip content={theme === "theme-light" ? "Dark mode" : "Light mode"}>
      <button
        className="border-border  font-600 flex items-center gap-x-2 rounded border p-2 text-sm"
        type="button"
        onClick={() => setTheme(theme === "theme-light" ? "dark" : "theme-light")}
      >
        {theme === "theme-light" ? <SunIcon /> : <MoonIcon />}
        <span className="sr-only">
          {theme === "theme-light" ? "Turn to dark mode" : "Turn to light mode"}
        </span>
      </button>
    </BaseTooltip>
  );
}
