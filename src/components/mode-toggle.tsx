"use client";
import { useEffect, useState } from "react";

import useDarkMode from "@/src/libs/useDarkMode";
import IconButton from "./common/iconButton";
import Moon from "./icons/moon";
import Sun from "./icons/sun";

export function ModeToggle(props: React.ComponentProps<"button">) {
  const [mounted, setMounted] = useState(false);
  const { isThemeDark, toggleTheme } = useDarkMode();

  useEffect(() => setMounted(true), []);

  return (
    <IconButton {...props} aria-label="Toggle Dark Mode" onClick={toggleTheme}>
      {!mounted ? (
        <></>
      ) : isThemeDark ? (
        <Moon />
      ): (
        <Sun />
      )}
    </IconButton>
  )
}
