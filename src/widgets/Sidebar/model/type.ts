import type { SidbarItemVariant } from "../ui/SidebarItem/const";

export interface ISidebarItem {
  href: string;
  label: string;
  icon: string;
  variant?: SidbarItemVariant
}

export interface ISidebarSection {
  title: string;
  items: ISidebarItem[];
}
