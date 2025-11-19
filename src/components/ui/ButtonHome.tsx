"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ButtonHomeProps {
  href: string;
  label?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  fontClass?: string;
}

const ButtonHome = ({
  href,
  label = "Home",
  bgColor = "bg-neutral-900/80",
  textColor = "text-green-400",
  borderColor = "border-neutral-700",
  hoverBgColor = "hover:bg-neutral-800",
  hoverTextColor = "hover:text-green-300",
  fontClass = "font-mono",
}: ButtonHomeProps) => (
  <Link
    href={href}
    className={`
      fixed z-50 flex items-center gap-2 px-3 py-2 rounded-full shadow-md transition text-xs
      ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} ${fontClass}
      border
      bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-4 md:top-4 md:translate-x-0
    `}
    aria-label={label}
  >
    <ArrowLeft className="w-4 h-4" />
    <span>{label}</span>
  </Link>
);

export default ButtonHome;
