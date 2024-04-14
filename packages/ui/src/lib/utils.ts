import { type ClassValue, clsx } from "clsx";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type TailwindClassName = ComponentProps<"div">["className"];

export interface TailwindClassNameProps {
  className?: TailwindClassName;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
