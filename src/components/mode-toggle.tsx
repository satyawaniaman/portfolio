"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeAnimationType, useModeAnimation } from 'react-theme-switch-animation'
export function ModeToggle() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    blurAmount: 4, 
    duration: 600, 
  })

  return (
    <Button
    ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => toggleSwitchTheme()}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
