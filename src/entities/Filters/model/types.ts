import type { SelectorOption } from "@/shared/types";
import type { iconMap } from "./const";

export interface FilterItem {
  key: IconKey;
  label: string;
  options: SelectorOption[];
}

export interface CurrentFilter {
    key: string;
    option: SelectorOption
}

export type IconKey = keyof typeof iconMap 