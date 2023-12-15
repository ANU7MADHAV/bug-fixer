// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden, useSwitch, SwitchProps } from "@nextui-org/react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export function ThemeSwitcher(props: SwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {isSelected ? (
            <span className="primary-gradient">
              <MdSunny />{" "}
            </span>
          ) : (
            <FaMoon />
          )}
        </div>
      </Component>
    </div>
  );
}
