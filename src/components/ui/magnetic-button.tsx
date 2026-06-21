"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  as = "button",
  href,
  type = "button",
  disabled,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 350, damping: 15, mass: 0.5 },
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    const external = isExternalHref(href);
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-block cursor-pointer"
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noopener noreferrer" : undefined)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block cursor-pointer disabled:cursor-not-allowed"
    >
      {inner}
    </button>
  );
}
