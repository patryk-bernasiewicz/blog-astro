import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...inputs: ClassNameValue[]) => twMerge(inputs);
