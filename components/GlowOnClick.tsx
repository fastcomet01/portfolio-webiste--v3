"use client";

import React, { useRef } from "react";

type Props = {
  children: React.ReactElement<any>;
  className?: string;
};

export default function GlowOnClick({ children, className }: Props) {
  const timeoutRef = useRef<number | null>(null);

  const triggerGlow = (el: HTMLElement) => {
    // Restart animation cleanly for rapid or multiple clicks
    el.classList.remove("glow-red-click");
    void el.offsetWidth; // force reflow to reset animation timeline
    el.classList.add("glow-red-click");
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      el.classList.remove("glow-red-click");
      timeoutRef.current = null;
    }, 500);
  };

  const isDisabled = (el: HTMLElement) => {
    // Respect disabled buttons; anchors/divs don't have disabled
    return (el as HTMLButtonElement).disabled === true;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (isDisabled(el)) return;
    triggerGlow(el);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (isDisabled(el)) return;
    triggerGlow(el);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const el = e.currentTarget as HTMLElement;
      if (isDisabled(el)) return;
      triggerGlow(el);
    }
  };

  const child = children as React.ReactElement<any>;

  return React.cloneElement<any>(child, {
    onPointerDown: (e: React.PointerEvent<HTMLElement>) => {
      child.props.onPointerDown?.(e);
      handlePointerDown(e);
    },
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      child.props.onClick?.(e);
      handleClick(e);
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      child.props.onKeyDown?.(e);
      handleKeyDown(e);
    },
    className: [className, child.props.className].filter(Boolean).join(" "),
  });
}
